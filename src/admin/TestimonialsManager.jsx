import { useCallback, useEffect, useState } from "react";
import { api } from "./adminApi";
import { Btn, Field, ImageUpload, Modal, Toggle, inputCls } from "./ui";

const PLATFORMS = ["direct", "google", "fiverr", "upwork", "linkedin"];
const empty = {
  name: "", title: "", message: "", rating: 5, platform: "direct",
  profilePic: "", profilePicPublicId: "", reviewDate: "", published: true,
};
const toDateInput = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");

export default function TestimonialsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null);

  const load = useCallback(async () => {
    try {
      const { data } = await api("/api/testimonials/admin/all");
      setItems(data);
      setError("");
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const importDefaults = async () => {
    try { await api("/api/seed", { method: "POST" }); load(); }
    catch (e) { setError(e.message); }
  };

  const remove = async (t) => {
    if (!confirm(`Delete testimonial from "${t.name}"?`)) return;
    try { await api(`/api/testimonials/${t._id}`, { method: "DELETE" }); load(); }
    catch (e) { setError(e.message); }
  };
  const togglePublish = async (t) => {
    try { await api(`/api/testimonials/${t._id}`, { method: "PUT", body: { published: !t.published } }); load(); }
    catch (e) { setError(e.message); }
  };

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-oswald text-2xl tracking-wide">Testimonials</h2>
          <p className="text-xs text-white/40">{items.length} total</p>
        </div>
        <Btn onClick={() => setEditing("new")}>+ Add testimonial</Btn>
      </div>

      {error && <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300">{error}</p>}
      {loading && <p className="text-sm text-white/40">Loading…</p>}
      {!loading && !items.length && !error && (
        <div className="rounded-xl border border-dashed border-white/15 p-10 text-center text-sm text-white/60">
          <p className="mb-4">Nothing in the database yet. Import what your website currently shows, or add a new one.</p>
          <Btn variant="ghost" onClick={importDefaults}>Import existing website content</Btn>
        </div>
      )}

      <div className="space-y-3">
        {items.map((t) => (
          <div key={t._id} className="flex flex-wrap items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-primary/40 sm:flex-nowrap">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/20 text-lg font-semibold text-primary">
              {t.profilePic ? <img src={t.profilePic} alt="" loading="lazy" className="h-full w-full object-cover" /> : t.name?.[0]?.toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{t.name} <span className="font-normal text-white/40">· {t.title}</span></p>
              <p className="text-xs text-[#f4b400]">{"★".repeat(t.rating)}<span className="text-white/15">{"★".repeat(5 - t.rating)}</span> <span className="ml-2 uppercase text-white/30">{t.platform}</span></p>
              <p className="mt-1 line-clamp-2 text-sm text-white/60">{t.message}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider ${t.published ? "bg-primary/15 text-primary" : "bg-white/10 text-white/40"}`}>{t.published ? "Live" : "Hidden"}</span>
              <Btn variant="ghost" onClick={() => togglePublish(t)}>{t.published ? "Hide" : "Show"}</Btn>
              <Btn variant="ghost" onClick={() => setEditing(t)}>Edit</Btn>
              <Btn variant="danger" onClick={() => remove(t)}>Delete</Btn>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <TestimonialForm
          item={editing === "new" ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load(); }}
        />
      )}
    </section>
  );
}

function TestimonialForm({ item, onClose, onSaved }) {
  const [form, setForm] = useState(item ? { ...empty, ...item, reviewDate: toDateInput(item.reviewDate) } : { ...empty, reviewDate: toDateInput(new Date()) });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErr("");
    try {
      const body = {
        name: form.name, title: form.title, message: form.message,
        rating: Number(form.rating), platform: form.platform,
        profilePic: form.profilePic, profilePicPublicId: form.profilePicPublicId,
        reviewDate: form.reviewDate, published: form.published,
      };
      if (item) await api(`/api/testimonials/${item._id}`, { method: "PUT", body });
      else await api("/api/testimonials", { method: "POST", body });
      onSaved();
    } catch (ex) { setErr(ex.message); setSaving(false); }
  };

  return (
    <Modal title={item ? "Edit testimonial" : "Add testimonial"} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Photo (optional)">
          <ImageUpload round folder="testimonials" value={form.profilePic}
            onChange={({ url, publicId }) => setForm((f) => ({ ...f, profilePic: url, profilePicPublicId: publicId }))} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Client name"><input required className={inputCls} value={form.name} onChange={set("name")} maxLength={80} /></Field>
          <Field label="Role / company"><input className={inputCls} value={form.title} onChange={set("title")} maxLength={120} /></Field>
        </div>
        <Field label="Review"><textarea required rows={4} maxLength={1200} className={inputCls} value={form.message} onChange={set("message")} /></Field>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Rating">
            <select className={inputCls} value={form.rating} onChange={set("rating")}>
              {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n} className="bg-black">{n} ★</option>)}
            </select>
          </Field>
          <Field label="Platform">
            <select className={inputCls} value={form.platform} onChange={set("platform")}>
              {PLATFORMS.map((p) => <option key={p} value={p} className="bg-black">{p}</option>)}
            </select>
          </Field>
          <Field label="Date"><input type="date" className={inputCls} value={form.reviewDate} onChange={set("reviewDate")} /></Field>
        </div>
        <Toggle checked={form.published} onChange={(v) => setForm((f) => ({ ...f, published: v }))} label="Visible on website" />
        {err && <p className="text-sm text-red-400">{err}</p>}
        <div className="flex justify-end gap-3 pt-2">
          <Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn>
          <Btn disabled={saving}>{saving ? "Saving…" : "Save testimonial"}</Btn>
        </div>
      </form>
    </Modal>
  );
}
