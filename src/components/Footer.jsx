const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between items-center mx-auto p-7 text-lg w-full">
      <div>
        &copy; {currentYear}{" "}
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:underline"
        >
          Salvatore Mammoliti
        </a>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/ios_filled/50/github.png"
            alt="GitHub Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/fluent/48/linkedin.png"
            alt="LinkedIn Logo"
          />
        </a>
        <a
          href="https://www.frontendmentor.io/profile/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="35"
            height="35"
            src="https://asset.brandfetch.io/id-7PJzcYu/idDksQWGNy.jpeg"
            alt="Frontend Mentor Logo"
          />
        </a>
      </div>
    </footer>
  );
}
