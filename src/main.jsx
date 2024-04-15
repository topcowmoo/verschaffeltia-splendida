// Import necessary modules from React and React Router
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components for different pages
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// Create a browser router configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main application component
    errorElement: <Error />, // Error component
    children: [
      {
        index: true, // This route is the index route
        element: <Home />, // Home page component
      },
      {
        path: "/About", // About page path
        element: <About />, // About page component
      },
      {
        path: "/Contact", // Contact page path
        element: <Contact />, // Contact page component
      },
      {
        path: "/Projects", // Projects page path
        element: <Projects />, // Projects page component
      },
      {
        path: "/Resume", // Resume page path
        element: <Resume />, // Resume page component
      },
    ],
  },
]);

// Render the router provider with the created router
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
