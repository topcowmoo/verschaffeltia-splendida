import date from "../assets/images/date.png";

const About = () => {
  return (
    <div className="container bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-20 mx-auto text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
        <img
          src={date}
          alt="palm tree"
          className="rounded-lg shadow-lg w-1/2"
        />
        <div className="mt-4 text-lg">
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

export default About;
