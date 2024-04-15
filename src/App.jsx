// Import necessary modules and components
import { Outlet } from "react-router-dom"; // Import Outlet component from react-router-dom
import { FooterWithSocialLinks } from "./components/Footer"; // Import FooterWithSocialLinks component from Footer.js
import "./index.css"; // Import global styles from index.css
import background from "./assets/images/flwater.png"; // Import background image

import Header from "./components/Header"; // Import Header component from Header.js

// Define functional component App
function App() {
  return (
    // Main container with background image
    <div
      className="min-h-screen bg-cover bg-center" // Set classes for background image
      style={{ backgroundImage: `url(${background})` }} // Set background image style
    >
      <Header /> {/* Render Header component */}
      <Outlet /> {/* Render child routes */}
      <FooterWithSocialLinks /> {/* Render FooterWithSocialLinks component */}
    </div>
  );
}

export default App; // Export App component as default
