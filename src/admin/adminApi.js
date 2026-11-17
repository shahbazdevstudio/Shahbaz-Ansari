import { API_URL } from "../lib/api";

const KEY = "admin_token";

export const getToken = () => {
  try { return localStorage.getItem(KEY); } catch { return null; }
};
export const setToken = (t) => {
  try { t ? localStorage.setItem(KEY, t) : localStorage.removeItem(KEY); } catch { /* ignore */ }
};

export async function api(path, { method = "GET", body, form } = {}) {
  const headers = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body) headers["Content-Type"] = "application/json";

  let res;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      body: form || (body ? JSON.stringify(body) : undefined),
    });
  } catch {
    throw new Error("Cannot reach the server. Check your connection / API URL.");
  }
  const json = await res.json().catch(() => ({}));
  if (res.status === 401 && token && !path.startsWith("/api/auth/login")) {
    setToken(null);
    window.dispatchEvent(new Event("admin-logout"));
  }
  if (!res.ok) throw new Error(json.message || "Request failed");
  return json;
}

export async function uploadImage(file, folder) {
  const form = new FormData();
  form.append("image", file);
  return api(`/api/upload?folder=${folder}`, { method: "POST", form });
}
