// import useState from react
import { useState } from 'react';

function Navbar() {
  // add state
  const [isActive, setIsActive] = useState(false);

  // toggle active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  // remove active class
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
      <nav className="flex items-center justify-between px-4 py-2 bg-blue-200 bg-opacity-75 text-gray-900">

          {/* navbar */}
          <ul className={`md:flex ${isActive ? 'block' : 'hidden'}`}>
            <li onClick={removeActive}>
              <a href="#home" className="block px-2 py-1 hover:text-blue-400">Home</a>
            </li>
            <li onClick={removeActive}>
              <a href="#aboutme" className="block px-2 py-1 hover:text-blue-400">About Me</a>
            </li>
            <li onClick={removeActive}>
              <a href="#projects" className="block px-2 py-1 hover:text-blue-400">Projects</a>
            </li>
            <li onClick={removeActive}>
              <a href="#contact" className="block px-2 py-1 hover:text-blue-400">Contact</a>
            </li>
            <li onClick={removeActive}>
              <a href="#resume" className="block px-2 py-1 hover:text-blue-400">Resume</a>
            </li>
          </ul>

          {/* hamburger menu */}
          <div className="md:hidden">
            <button onClick={toggleActiveClass}>
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

// export Navbar component for use
export default Navbar;
