import { useEffect, useState } from "react";
import { fetchPublic } from "./api";

/**
 * Returns the built-in `fallback` instantly (so the page never looks empty),
 * then swaps in the admin-managed data from the API when it arrives.
 */
function useRemoteList(path, fallback) {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    let alive = true;
    fetchPublic(path)
      .then((data) => {
        if (alive && Array.isArray(data) && data.length) setItems(data);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [path]);
  return items;
}

export const useProjects = (fallback) => useRemoteList("/api/projects", fallback);
export const useTestimonials = (fallback) => useRemoteList("/api/testimonials", fallback);
