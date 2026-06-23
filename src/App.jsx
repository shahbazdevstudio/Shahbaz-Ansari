import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/Home';
import CustomCursor from "./components/cursor/CustomCursor";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import TestimonialsPage from "./pages/Testimonials";
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    // {
    //   path: "/about",
    //   element: <AboutPage />,
    // },
    // {
    //   path: "/services",
    //   element: <ServicesPage />,
    // },
    // {
    //   path: "/contact",
    //   element: <ContactPage />,
    // },
    // {
    //   path: "/projects",
    //   element: <ProjectsPage />,
    // },
    // {
    //   path: "/testimonials",
    //   element: <TestimonialsPage />,
    // },
  ]);

  return (
    <>
      {/* <CustomCursor /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App
