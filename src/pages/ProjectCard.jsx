// Import icons from react-icons
import {
  SiGithub,
  SiHeroku,
  SiRender,
  SiScreencastify,
  SiGithubpages,
} from "react-icons/si";

// Define ProjectCard functional component
const ProjectCard = ({ project }) => {
  // Destructure project object
  const { title, image, githubLink, demoLink, herokuLink, renderLink, githubPagesLink } = project;

  // Return JSX for ProjectCard component
  return (
    <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mb-10 p-6">
      <div className="rounded overflow-hidden shadow-lg">
        {/* Image */}
        <img className="w-full" src={image} alt={`Screenshot of ${title}`} />
        <div className="px-6 py-4">
          {/* Title */}
          <div className="font-bold text-xl text-center mb-2">{title}</div>
          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            {/* GitHub button */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
            >
              <SiGithub className="mr-1" /> GitHub
            </a>

            {/* Heroku button */}
            {herokuLink && (
              <a
                href={herokuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiHeroku className="mr-1" /> Heroku
              </a>
            )}

            {/* Render button */}
            {renderLink && (
              <a
                href={renderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiRender className="mr-1" /> Render
              </a>
            )}

            {/* Demo button */}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiScreencastify className="mr-1" /> Demo
              </a>
            )}

            {/* GitHub Pages button */}
            {githubPagesLink && (
              <a
                href={githubPagesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiGithubpages className="mr-1" /> GitHub Pages
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Export ProjectCard component as default
export default ProjectCard;
