import { useRef, useState } from "react";
import { uploadImage } from "./adminApi";

export const inputCls =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-primary focus:bg-white/[0.05]";

export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/50">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-white/30">{hint}</span>}
    </label>
  );
}

export function Btn({ variant = "primary", className = "", ...p }) {
  const styles = {
    primary: "bg-gradient-to-r from-primary to-secondary text-black font-semibold hover:brightness-110",
    ghost: "border border-white/15 text-white/80 hover:border-primary hover:text-white",
    danger: "border border-red-500/40 text-red-400 hover:bg-red-500/10",
  };
  return (
    <button
      {...p}
      className={`rounded-lg px-4 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${className}`}
    />
  );
}

export function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-primary/10">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="font-oswald text-xl tracking-wide">{title}</h3>
          <button onClick={onClose} className="text-2xl leading-none text-white/50 hover:text-white" aria-label="Close">×</button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2 text-sm text-white/70"
    >
      <span className={`relative h-5 w-9 rounded-full transition ${checked ? "bg-primary" : "bg-white/15"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${checked ? "left-[18px]" : "left-0.5"}`} />
      </span>
      {label}
    </button>
  );
}

/** Image picker that uploads straight to Cloudinary via the backend. */
export function ImageUpload({ value, onChange, folder, round = false }) {
  const ref = useRef(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const pick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr("");
    try {
      const { url, publicId } = await uploadImage(file, folder);
      onChange({ url, publicId });
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setBusy(false);
      if (ref.current) ref.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-20 shrink-0 items-center justify-center overflow-hidden border border-dashed border-white/20 bg-white/[0.03] text-[10px] text-white/30 ${
          round ? "w-20 rounded-full" : "w-32 rounded-lg"
        }`}
      >
        {value ? <img src={value} alt="" className="h-full w-full object-cover" /> : "No image"}
      </div>
      <div>
        <input ref={ref} type="file" accept="image/*" hidden onChange={pick} />
        <Btn type="button" variant="ghost" disabled={busy} onClick={() => ref.current?.click()}>
          {busy ? "Uploading…" : value ? "Replace image" : "Upload image"}
        </Btn>
        {value && !busy && (
          <button type="button" onClick={() => onChange({ url: "", publicId: "" })} className="ml-3 text-xs text-white/40 hover:text-red-400">
            Remove
          </button>
        )}
        {err && <p className="mt-2 text-xs text-red-400">{err}</p>}
      </div>
    </div>
  );
}
