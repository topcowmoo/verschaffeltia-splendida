import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-6 py-20 text-left ml-10 mt-20 text-surface dark:text-white">
      <h1 className="mb-6 text-5xl font-bold text-black">
        Salvatore Mammoliti
      </h1>
      <h2 className="mb-8 text-3xl font-bold text-black">
        Full-Stack Web Developer
      </h2>
      {/* Use Link component directly on a clickable element */}
      <div className="inline-block">
        <Link
          to="/Projects"
          className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow no-underline focus:no-underline"
        >
          Have a look at my work!
        </Link>
      </div>
    </div>
  );
};

export default Home;
