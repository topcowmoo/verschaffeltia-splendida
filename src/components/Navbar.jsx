import { useState } from "react"; // Importing useState hook
import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation from react-router-dom
import classNames from "classnames"; // Importing classNames library for conditional classnames
import "animate.css"; // Importing animate.css library

// Define Navbar functional component
function Navbar() {
  // Define state for toggling active class
  const [isActive, setIsActive] = useState(false);
  // Get the current location
  const location = useLocation();

  // Function to toggle active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // Function to remove active class
  const removeActive = () => {
    setIsActive(false);
  };

  // Return JSX for Navbar component
  return (
    <div className="App">
      {/* Header with navigation */}
      <header className="App-header">
        {/* Navigation menu */}
        <nav className="sticky bottom-0 flex items-center justify-between px-4 py-2 text-black text-2xl">
          {/* List of navigation links */}
          <ul className={`md:flex ${isActive ? "block" : "hidden"}`}>
            {/* Home link */}
            <li onClick={removeActive}>
              <Link
                to="/"
                className={classNames("block px-2 py-1 hover:text-accent", {
                  "text-accent": location.pathname === "/",
                  "animate__animated animate__swing": location.pathname === "/",
                })}
              >
                Home
              </Link>
            </li>
            {/* About link */}
            <li onClick={removeActive}>
              <Link
                to="/about"
                className={classNames("block px-2 py-1 hover:text-accent", {
                  "text-accent": location.pathname === "/about",
                  "animate__animated animate__swing": location.pathname === "/about",
                })}
              >
                Me
              </Link>
            </li>
            {/* Projects link */}
            <li onClick={removeActive}>
              <Link
                to="/projects"
                className={classNames("block px-2 py-1 hover:text-accent", {
                  "text-accent": location.pathname === "/projects",
                  "animate__animated animate__swing": location.pathname === "/projects",
                })}
              >
                Projects
              </Link>
            </li>
            {/* Contact link */}
            <li onClick={removeActive}>
              <Link
                to="/contact"
                className={classNames("block px-2 py-1 hover:text-accent", {
                  "text-accent": location.pathname === "/contact",
                  "animate__animated animate__swing": location.pathname === "/contact",
                })}
              >
                Contact
              </Link>
            </li>
            {/* Resume link */}
            <li onClick={removeActive}>
              <Link
                to="/resume"
                className={classNames("block px-2 py-1 hover:text-accent", {
                  "text-accent": location.pathname === "/resume",
                  "animate__animated animate__swing": location.pathname === "/resume",
                })}
              >
                Resume
              </Link>
            </li>
          </ul>

          {/* Button to toggle navigation menu on small screens */}
          <div className="md:hidden" aria-label="Toggle navigation menu">
            <button onClick={toggleActiveClass}>
              {/* Hamburger menu icon */}
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar; // Export Navbar component as default
