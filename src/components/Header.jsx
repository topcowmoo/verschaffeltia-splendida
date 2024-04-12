import Navbar from "./Navbar";
import logo from "../assets/images/logonb.png";

function Header() {
  return (
    <header className="sticky top-0 bg-blue-100 flex justify-between items-center mx-auto p-7 text-lg w-full">
      <img src={logo} alt="Logo" className="h-10 w-auto" />
      <Navbar />
    </header>
  );
}

export default Header;
