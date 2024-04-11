import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
