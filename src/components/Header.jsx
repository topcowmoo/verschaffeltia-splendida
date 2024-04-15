// Importing Navbar component
import Navbar from "./Navbar";

// Define Header functional component
function Header() {
  // Return JSX for Header component
  return (
    <header className="relative overflow-hidden flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        {/* Logo text */}
        <h1 className="text-3xl text-black ml-4">S<span className="text-accent text-4xl">/</span>M</h1>
      </div>
      
      {/* Include Navbar component */}
      <Navbar />
    </header>
  );
}

export default Header; // Export Header component as default
