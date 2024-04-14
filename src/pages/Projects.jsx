import mvc from "../assets/images/drymvc.png";
import mongo from "../assets/images/heavy.png";
import pwa from "../assets/images/jate.png";
import api from "../assets/images/weather.png"
import cream from "../assets/images/cream.png"
import ecom from "../assets/images/windy.png"
import { SiGithub, SiHeroku, SiScreencastify, SiRender, SiGithubpages } from "react-icons/si";

const Projects = () => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={mvc} alt="screenshot" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Dry MVC Tech Blog</div>
            <div className="flex justify-center">
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4">
                <SiGithub className="mr-1" /> GitHub
              </button>
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center">
                <SiHeroku className="mr-1" /> Heroku
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={mongo} alt="screenshot" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Heavy Maze Social Network</div>
            <div className="flex justify-center">
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4">
                <SiGithub className="mr-1" /> GitHub
              </button>
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center">
                <SiScreencastify className="mr-1" /> Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={pwa} alt="screenshot" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Just Another Text Editor</div>
            <div className="flex justify-center">
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4">
                <SiGithub className="mr-1" /> GitHub
              </button>
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center">
                <SiRender className="mr-1" /> Render
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={api} alt="screenshot" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Effective Weather Interface</div>
            <div className="flex justify-center">
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4">
                <SiGithub className="mr-1" /> GitHub
              </button>
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center">
                <SiGithubpages className="mr-1" /> GitHub Pages
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={cream} alt="screenshot" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Unbreakable Cream</div>
            <div className="flex justify-center">
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4">
                <SiGithub className="mr-1" /> GitHub
              </button>
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center">
                <SiHeroku className="mr-1" /> Heroku
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Card 6 */}
      <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={ecom} alt="screenshot" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">Windy E-Commerce Site</div>
            <div className="flex justify-center">
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center mr-4">
                <SiGithub className="mr-1" /> GitHub
              </button>
              <button className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg inline-flex items-center">
                <SiScreencastify className="mr-1" /> Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
