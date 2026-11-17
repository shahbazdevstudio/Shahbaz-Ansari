// Base URL of the backend. In production set VITE_API_URL in Vercel (e.g. https://your-api.vercel.app)
export const API_URL = (import.meta.env.VITE_API_URL || "https://shahbaz-ansari-backend-fuvacawf8.vercel.app").replace(/\/$/, "");

const cache = new Map();

/** GET a public endpoint once per page load (de-duplicated). */
export function fetchPublic(path) {
  if (!cache.has(path)) {
    const p = fetch(`${API_URL}${path}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((j) => j.data ?? j)
      .catch((e) => {
        cache.delete(path);
        throw e;
      });
    cache.set(path, p);
  }
  return cache.get(path);
}
