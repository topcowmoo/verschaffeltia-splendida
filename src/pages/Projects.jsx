// Import images for project cards
import mvc from "../assets/images/drymvc.png";
import mongo from "../assets/images/heavy.png";
import pwa from "../assets/images/jate.png";
import api from "../assets/images/weather.png";
import cream from "../assets/images/cream.png";
import ecom from "../assets/images/windy.png";
import ProjectCard from "./ProjectCard";

// Define an array of project objects
const projects = [
  {
    // Project 1: Dry MVC Tech Blog
    title: "Dry MVC Tech Blog",
    image: mvc,
    githubLink: "https://github.com/topcowmoo/dry-mvc-tech-blog",
    herokuLink: "https://dry-mvc-tech-blog-b103946e224c.herokuapp.com/",
  },
  {
    // Project 2: Heavy Maze Social Network
    title: "Heavy Maze Social Network",
    image: mongo,
    githubLink: "https://github.com/topcowmoo/heavy-maze-social-network",
    demoLink:
      "https://drive.google.com/file/d/1NOA6Y6BdFbwwKnQKyTvscbDS8e_9_gKg/view",
  },
  {
    // Project 3: Unbreakable Cream
    title: "Unbreakable Cream",
    image: cream,
    githubLink: "https://github.com/topcowmoo/unbreakable-cream",
    herokuLink: "https://unbreakable-cream-a4b95d823c2c.herokuapp.com/",
  },
  {
    // Project 4: Just Another Text Editor
    title: "Just Another Text Editor",
    image: pwa,
    githubLink: "https://github.com/topcowmoo/general-toothpaste",
    renderLink: "https://general-toothpaste.onrender.com",
  },
  {
    // Project 5: Effective Weather Interface
    title: "Effective Weather Interface",
    image: api,
    githubLink: "https://github.com/topcowmoo/effective-weather-interface",
    githubPagesLink: "https://topcowmoo.github.io/effective-weather-interface/",
  },
  {
    // Project 6: Windy E-Commerce Site
    title: "Windy E-Commerce Site",
    image: ecom,
    githubLink: "https://github.com/topcowmoo/windy-e-commerce-site",
    demoLink:
      "https://drive.google.com/file/d/1q_LhyzKBZ6-6fw9hbPgev_rvDWNz-TUh/view",
  },
];

// Define Projects functional component
const Projects = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Map over the projects array and render project cards */}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

// Export Projects component as default
export default Projects;
