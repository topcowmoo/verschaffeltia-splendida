import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "animate.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="sticky bottom-0 flex items-center justify-between px-4 py-2 text-black text-2xl">
          <ul className={`md:flex ${isActive ? "block" : "hidden"}`}>
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

          <div className="md:hidden">
            <button onClick={toggleActiveClass}>
              <svg
                className="w-6 h-6 text-mygray"
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

export default Navbar;
