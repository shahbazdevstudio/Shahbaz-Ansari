import { createBrowserRouter } from "react-router";
import { RouterProvider, Outlet, useLocation } from "react-router";
import { lazy, Suspense, useEffect } from "react";

import "./App.css";

import CustomCursor from "./components/cursor/CustomCursor";
import ScrollEffects from "./components/effects/ScrollEffects";

import HomePage from "./pages/Home";
// Non-home routes are code-split so the first page loads faster
const AboutPage = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const TestimonialsPage = lazy(() => import("./pages/Testimonials"));
const ContactPage = lazy(() => import("./pages/Contact"));
const AdminApp = lazy(() => import("./admin/AdminApp"));

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

// Layout
function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollEffects />
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#000" }} />}>
        <Outlet />
      </Suspense>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-me",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/admin",
        element: <AdminApp />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {!window.location.pathname.startsWith("/admin") && <CustomCursor />}
      <RouterProvider router={router} />
    </>
  );
}

export default App;