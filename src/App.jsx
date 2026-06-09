import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/Home';
import './App.css'
import CustomCursor from "./components/cursor/CustomCursor";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <>
      {/* <CustomCursor /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App
