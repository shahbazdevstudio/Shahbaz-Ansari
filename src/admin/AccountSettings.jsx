import { useState } from "react";
import { api, setToken } from "./adminApi";
import { Btn, Field, inputCls } from "./ui";

export default function AccountSettings({ email, onUpdated }) {
  const [form, setForm] = useState({ currentPassword: "", email: email || "", newPassword: "", confirm: "" });
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [saving, setSaving] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });
    if (form.newPassword && form.newPassword !== form.confirm) {
      return setMsg({ type: "err", text: "New passwords do not match" });
    }
    setSaving(true);
    try {
      const body = { currentPassword: form.currentPassword };
      if (form.email && form.email !== email) body.email = form.email;
      if (form.newPassword) body.newPassword = form.newPassword;
      const res = await api("/api/auth/credentials", { method: "PUT", body });
      setToken(res.token);
      onUpdated(res.email);
      setForm((f) => ({ ...f, currentPassword: "", newPassword: "", confirm: "", email: res.email }));
      setMsg({ type: "ok", text: "Login details updated." });
    } catch (ex) {
      setMsg({ type: "err", text: ex.message });
    } finally { setSaving(false); }
  };

  return (
    <section className="max-w-lg">
      <h2 className="mb-1 font-oswald text-2xl tracking-wide">Login details</h2>
      <p className="mb-6 text-xs text-white/40">Change the admin email and/or password. Your current password is required.</p>
      <form onSubmit={submit} className="space-y-4">
        <Field label="Login email / username"><input className={inputCls} value={form.email} onChange={set("email")} autoComplete="username" /></Field>
        <Field label="New password" hint="Leave empty to keep the current one (min 8 characters)">
          <input type="password" className={inputCls} value={form.newPassword} onChange={set("newPassword")} autoComplete="new-password" />
        </Field>
        <Field label="Confirm new password"><input type="password" className={inputCls} value={form.confirm} onChange={set("confirm")} autoComplete="new-password" /></Field>
        <Field label="Current password"><input required type="password" className={inputCls} value={form.currentPassword} onChange={set("currentPassword")} autoComplete="current-password" /></Field>
        {msg.text && <p className={`text-sm ${msg.type === "ok" ? "text-primary" : "text-red-400"}`}>{msg.text}</p>}
        <Btn disabled={saving}>{saving ? "Saving…" : "Update login details"}</Btn>
      </form>
    </section>
  );
}
