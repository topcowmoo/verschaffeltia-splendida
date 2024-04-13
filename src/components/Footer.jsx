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
        >
          <img
            width="29"
            height="29"
            src="https://img.icons8.com/stickers/100/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="28"
            height="28"
            src="https://img.icons8.com/stickers/100/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="23"
            height="23"
            src="https://asset.brandfetch.io/id-7PJzcYu/idDksQWGNy.jpeg"
            alt="Frontend Mentor Logo"
          />
        </a>
      </div>
    </footer>
  );
}
