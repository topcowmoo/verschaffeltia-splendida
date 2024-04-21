// Importing necessary icons from react-icons library
import { SiGithub, SiLinkedin, SiFrontendmentor } from "react-icons/si";

// Getting the current year
const currentYear = new Date().getFullYear();

// Define FooterWithSocialLinks functional component
export function FooterWithSocialLinks() {
  // Return JSX for FooterWithSocialLinks component
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center mx-auto p-7 text-lg w-full z-10">
      {/* Left section containing name and copyright */}
      <div className="flex items-center text-black">
        {/* Link to GitHub profile */}
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-accent"
        >
          Salvatore Mammoliti &#x2665; M
        </a>
        {/* Display current year */}
        <div className="ml-2 text-xs">&copy; {currentYear}</div>
      </div>
      {/* Right section containing social links */}
      <div className="flex gap-4">
        {/* Link to LinkedIn profile */}
        <a
          href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
          title="Linkedin Profile"
        >
          <SiLinkedin size={36} />
        </a>
        {/* Link to Frontend Mentor profile */}
        <a
          href="https://www.frontendmentor.io/profile/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
          title="Frontend Mentor Profile"
        >
          <SiFrontendmentor size={36} />
        </a>
        {/* Link to GitHub profile */}
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
          title="Github Profile"
        >
          <SiGithub size={36} />
        </a>
      </div>
    </footer>
  );
}
