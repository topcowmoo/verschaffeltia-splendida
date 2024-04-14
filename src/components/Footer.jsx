import { SiGithub, SiLinkedin, SiFrontendmentor } from "react-icons/si";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center mx-auto p-7 text-lg w-full z-10">
      <div className="flex items-center text-black">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-accent"
        >
          Salvatore Mammoliti
        </a>
        <div className="ml-2 text-xs">&copy; {currentYear}</div>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
        >
          <SiGithub size={36} />
        </a>
        <a
          href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
        >
          <SiLinkedin size={36} />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
        >
          <SiFrontendmentor size={36} />
        </a>
      </div>
    </footer>
  );
}
