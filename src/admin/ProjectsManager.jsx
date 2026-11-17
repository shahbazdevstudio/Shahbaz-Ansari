import { useCallback, useEffect, useState } from "react";
import { api } from "./adminApi";
import { Btn, Field, ImageUpload, Modal, Toggle, inputCls } from "./ui";

const empty = {
  title: "", description: "", image: "", imagePublicId: "", demo: "", github: "",
  tech: "", category: "", published: true,
};

export default function ProjectsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null); // null | project | "new"

  const load = useCallback(async () => {
    try {
      const { data } = await api("/api/projects/admin/all");
      setItems(data);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { load(); }, [load]);

  const importDefaults = async () => {
    try { await api("/api/seed", { method: "POST" }); load(); }
    catch (e) { setError(e.message); }
  };

  const remove = async (p) => {
    if (!confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    try { await api(`/api/projects/${p._id}`, { method: "DELETE" }); load(); }
    catch (e) { setError(e.message); }
  };

  const move = async (index, dir) => {
    const next = [...items];
    const j = index + dir;
    if (j < 0 || j >= next.length) return;
    [next[index], next[j]] = [next[j], next[index]];
    setItems(next);
    try { await api("/api/projects/admin/reorder", { method: "PUT", body: { ids: next.map((p) => p._id) } }); }
    catch (e) { setError(e.message); load(); }
  };

  const togglePublish = async (p) => {
    try { await api(`/api/projects/${p._id}`, { method: "PUT", body: { published: !p.published } }); load(); }
    catch (e) { setError(e.message); }
  };

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-oswald text-2xl tracking-wide">Projects</h2>
          <p className="text-xs text-white/40">{items.length} total · order here = order on the website</p>
        </div>
        <Btn onClick={() => setEditing("new")}>+ Add project</Btn>
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
        {items.map((p, i) => (
          <div key={p._id} className="flex flex-wrap items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-primary/40 sm:flex-nowrap">
            <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-white/5">
              {p.image && <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover" />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{p.title}</p>
              <p className="truncate text-xs text-white/40">{p.tech?.join(" · ")}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider ${p.published ? "bg-primary/15 text-primary" : "bg-white/10 text-white/40"}`}>
              {p.published ? "Live" : "Hidden"}
            </span>
            <div className="flex items-center gap-1.5">
              <button disabled={i === 0} onClick={() => move(i, -1)} className="h-8 w-8 rounded-md border border-white/10 text-white/60 hover:border-primary disabled:opacity-30" aria-label="Move up">↑</button>
              <button disabled={i === items.length - 1} onClick={() => move(i, 1)} className="h-8 w-8 rounded-md border border-white/10 text-white/60 hover:border-primary disabled:opacity-30" aria-label="Move down">↓</button>
              <Btn variant="ghost" onClick={() => togglePublish(p)}>{p.published ? "Hide" : "Show"}</Btn>
              <Btn variant="ghost" onClick={() => setEditing(p)}>Edit</Btn>
              <Btn variant="danger" onClick={() => remove(p)}>Delete</Btn>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <ProjectForm
          project={editing === "new" ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load(); }}
        />
      )}
    </section>
  );
}

function ProjectForm({ project, onClose, onSaved }) {
  const [form, setForm] = useState(
    project ? { ...empty, ...project, tech: (project.tech || []).join(", ") } : empty
  );
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErr("");
    try {
      const body = {
        title: form.title, description: form.description, image: form.image,
        imagePublicId: form.imagePublicId, demo: form.demo, github: form.github,
        tech: form.tech, category: form.category, published: form.published,
      };
      if (project) await api(`/api/projects/${project._id}`, { method: "PUT", body });
      else await api("/api/projects", { method: "POST", body });
      onSaved();
    } catch (ex) {
      setErr(ex.message);
      setSaving(false);
    }
  };

  return (
    <Modal title={project ? "Edit project" : "Add project"} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Thumbnail">
          <ImageUpload
            folder="projects"
            value={form.image}
            onChange={({ url, publicId }) => setForm((f) => ({ ...f, image: url, imagePublicId: publicId }))}
          />
        </Field>
        <Field label="Title"><input required className={inputCls} value={form.title} onChange={set("title")} maxLength={120} /></Field>
        <Field label="Description"><textarea required rows={3} maxLength={600} className={inputCls} value={form.description} onChange={set("description")} /></Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Live demo URL"><input type="url" className={inputCls} value={form.demo} onChange={set("demo")} placeholder="https://" /></Field>
          <Field label="GitHub URL"><input type="url" className={inputCls} value={form.github} onChange={set("github")} placeholder="https://github.com/…" /></Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Tech stack" hint="Comma separated — React, Node.js, MongoDB"><input className={inputCls} value={form.tech} onChange={set("tech")} /></Field>
          <Field label="Category" hint="Optional: Full-Stack, UI/UX or API (used by filters)"><input className={inputCls} value={form.category} onChange={set("category")} /></Field>
        </div>
        <Toggle checked={form.published} onChange={(v) => setForm((f) => ({ ...f, published: v }))} label="Visible on website" />
        {err && <p className="text-sm text-red-400">{err}</p>}
        <div className="flex justify-end gap-3 pt-2">
          <Btn type="button" variant="ghost" onClick={onClose}>Cancel</Btn>
          <Btn disabled={saving}>{saving ? "Saving…" : "Save project"}</Btn>
        </div>
      </form>
    </Modal>
  );
}
