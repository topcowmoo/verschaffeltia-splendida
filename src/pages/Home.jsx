import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-6 py-20 text-center text-surface dark:bg-neutral-700 dark:text-white">
      <h1 className="mb-6 text-5xl font-bold text-mygray">
        Salvatore Mammoliti
      </h1>
      <h3 className="mb-8 text-3xl font-bold text-mygray">
        Full-Stack Web Developer
      </h3>
      {/* Use button element to navigate to portfolio page */}
      <button className="bg-mygray hover:bg-accent text-white hover:text-mygray font-bold py-2 px-4 rounded shadow">
        <Link to="/Projects" className="hover:no-underline focus:no-underline">
          Have a look at my work!
        </Link>
      </button>
    </div>
  );
};

export default Home;
