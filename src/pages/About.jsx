import date from "../assets/images/date.png";

// Define About functional component
const About = () => {
  // Return JSX for About page display
  return (
    <div className="mt-10 pt-5">
      {/* Container for About section */}
      <div className="container flex bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] mx-auto mb-8 p-6 mt-5">
        {/* Image */}
        <img
          src={date}
          alt="palm tree"
          className="w-1/2 h-auto rounded-lg shadow-lg mr-4"
          style={{ maxWidth: "450px", height: "350px" }}
        />
        {/* Text content */}
        <div className="text-lg flex flex-col justify-center">
          {/* Introduction paragraph */}
          <p>
            Hey, I&apos;m Salvatore Mammoliti ~ a multidisciplinary full-stack
            web developer specialized in everything HTML, CSS, JavaScript,
            React, Node.js, Express, and so much more... I strive to create
            beautiful, responsive, and user-friendly websites and applications.
            I am a quick learner and a team player who is always eager to learn
            new technologies and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; // Export About component as default
