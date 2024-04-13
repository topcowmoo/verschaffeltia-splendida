// Header.js
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="relative overflow-hidden flex justify-between items-center">
      {/* Your logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold ml-4">S/M</h1>
        {/* You can style the logo as needed */}
      </div>
      
      {/* Include Navbar component */}
      <Navbar />
    </header>
  );
}

export default Header;
