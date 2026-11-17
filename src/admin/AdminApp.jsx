import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { api, getToken, setToken } from "./adminApi";
import { Btn, Field, inputCls } from "./ui";
import ProjectsManager from "./ProjectsManager";
import TestimonialsManager from "./TestimonialsManager";
import AccountSettings from "./AccountSettings";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      const res = await api("/api/auth/login", { method: "POST", body: { email, password } });
      setToken(res.token);
      onLogin(res.email);
    } catch (ex) {
      setErr(ex.message);
      setBusy(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
      <form onSubmit={submit} className="relative w-full max-w-sm space-y-5 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 p-8 shadow-2xl shadow-primary/10">
        <div className="text-center">
          <h1 className="font-oswald text-3xl tracking-wide">Admin <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Panel</span></h1>
          <p className="mt-1 text-xs text-white/40">Sign in to manage your portfolio</p>
        </div>
        <Field label="Email"><input required autoFocus className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" /></Field>
        <Field label="Password"><input required type="password" className={inputCls} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" /></Field>
        {err && <p className="text-sm text-red-400">{err}</p>}
        <Btn disabled={busy} className="w-full py-3">{busy ? "Signing in…" : "Sign in"}</Btn>
      </form>
    </div>
  );
}

const TABS = [
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "account", label: "Login details" },
];

export default function AdminApp() {
  const [email, setEmail] = useState(null);
  const [checking, setChecking] = useState(!!getToken());
  const [tab, setTab] = useState("projects");

  useEffect(() => {
    if (!getToken()) return;
    api("/api/auth/me")
      .then((r) => setEmail(r.email))
      .catch(() => setToken(null))
      .finally(() => setChecking(false));
  }, []);

  useEffect(() => {
    const out = () => setEmail(null);
    window.addEventListener("admin-logout", out);
    return () => window.removeEventListener("admin-logout", out);
  }, []);

  const logout = () => { setToken(null); setEmail(null); };

  return (
    <div className="min-h-screen bg-black font-mono text-white">
      <Helmet>
        <title>Admin | Shahbaz Ansari</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {checking ? (
        <div className="flex min-h-screen items-center justify-center text-sm text-white/40">Loading…</div>
      ) : !email ? (
        <Login onLogin={setEmail} />
      ) : (
        <>
          <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <a href="/" className="font-oswald text-xl tracking-wide">
                Shahbaz <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Admin</span>
              </a>
              <nav className="flex gap-1">
                {TABS.map((t) => (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className={`rounded-lg px-3 py-1.5 text-sm transition ${tab === t.id ? "bg-primary/15 text-primary" : "text-white/50 hover:text-white"}`}>
                    {t.label}
                  </button>
                ))}
              </nav>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <a href="/" target="_blank" rel="noreferrer" className="hover:text-primary">View site ↗</a>
                <Btn variant="ghost" onClick={logout}>Log out</Btn>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            {tab === "projects" && <ProjectsManager />}
            {tab === "testimonials" && <TestimonialsManager />}
            {tab === "account" && <AccountSettings email={email} onUpdated={setEmail} />}
          </main>
        </>
      )}
    </div>
  );
}
