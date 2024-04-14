import mvc from "../assets/images/drymvc.png";
import mongo from "../assets/images/heavy.png";
import pwa from "../assets/images/jate.png";
import api from "../assets/images/weather.png";
import cream from "../assets/images/cream.png";
import ecom from "../assets/images/windy.png";
import {
  SiGithub,
  SiHeroku,
  SiScreencastify,
  SiRender,
  SiGithubpages,
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5 lg:mt-0">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={mvc} alt="a screenshot of a tech blog" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
              Dry MVC Tech Blog
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/topcowmoo/dry-mvc-tech-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiGithub className="mr-1" /> GitHub
              </a>
              {/* Heroku button */}
              <a
                href="https://dry-mvc-tech-blog-b103946e224c.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiHeroku className="mr-1" /> Heroku
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5 lg:mt-0">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={mongo}
            alt="a screenshot of a social network"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
              Heavy Maze Social Network
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/topcowmoo/heavy-maze-social-network"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiGithub className="mr-1" /> GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1NOA6Y6BdFbwwKnQKyTvscbDS8e_9_gKg/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiScreencastify className="mr-1" /> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5 lg:mt-0">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={pwa}
            alt="a screenshot of a text editor"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
              Just Another Text Editor
            </div>
            <div className="flex justify-center">
              {/* GitHub button */}
              <a
                href="https://github.com/topcowmoo/general-toothpaste"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiGithub className="mr-1" /> GitHub
              </a>
              {/* Render button */}
              <a
                href="https://general-toothpaste.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiRender className="mr-1" /> Render
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5 lg:mt-0">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={api}
            alt="a screenshot of a weather interface"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
              Effective Weather Interface
            </div>
            <div className="flex justify-center">
              {/* GitHub button */}
              <a
                href="https://github.com/topcowmoo/effective-weather-interface"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiGithub className="mr-1" /> GitHub
              </a>
              {/* GitHub Pages button */}
              <a
                href="https://topcowmoo.github.io/effective-weather-interface/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiGithubpages className="mr-1" /> GitHub Pages
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5 lg:mt-0">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={cream} alt="a screenshot of a blog " />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
              Unbreakable Cream
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/topcowmoo/unbreakable-cream"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiGithub className="mr-1" /> GitHub
              </a>
              {/* Heroku button */}
              <a
                href="https://unbreakable-cream-a4b95d823c2c.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiHeroku className="mr-1" /> Heroku
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Card 6 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5 lg:mt-0">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={ecom} alt="a screenshot of a cli" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">
              Windy E-Commerce Site
            </div>
            <div className="flex justify-center">
              <a
                href="https://github.com/topcowmoo/windy-e-commerce-site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4"
              >
                <SiGithub className="mr-1" /> GitHub
              </a>
              <a
                href="https://drive.google.com/file/d/1q_LhyzKBZ6-6fw9hbPgev_rvDWNz-TUh/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center"
              >
                <SiScreencastify className="mr-1" /> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
