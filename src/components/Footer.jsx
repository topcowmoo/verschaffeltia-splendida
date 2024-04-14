import { SiGithub, SiLinkedin, SiFrontendmentor } from "react-icons/si";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center mx-auto p-7 text-lg w-full overflow-y-auto">
      <div className="flex items-center">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mygray hover:text-accent"
        >
          Salvatore Mammoliti
        </a>
        <div className="ml-2 text-xs text-mygray">&copy; {currentYear}</div>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
        >
          <SiGithub size={29} />
        </a>
        <a
          href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
        >
          <SiLinkedin size={28} />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-myaccent hover:text-accent"
        >
          <SiFrontendmentor size={23} />
        </a>
      </div>
    </footer>
  );
}
