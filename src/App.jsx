// App.js
import { Outlet } from "react-router-dom";
import { FooterWithSocialLinks } from "./components/Footer";
import "./index.css";
import background from "./assets/images/flwater.png";
import Header from "./components/Header";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <Outlet />
      <FooterWithSocialLinks />
    </div>
  );
}

export default App;
