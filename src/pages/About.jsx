import workflow from "../assets/images/flow.png";

const About = () => {
  return (
    <div className="container bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-20 mx-auto text-center">
      <img src={workflow} alt="Workflow" className="mx-auto w-1/2" />
      <div className="mt-4">
        <p>
          Hey,
          I&apos;m Salvatore Mammoliti ~ a multidisciplinary full-stack web developer specialized in everything HTML, CSS, JavaScript, React, Node.js, Express, and so much more...
          I strive to create beautiful, responsive, and user-friendly websites and applications. I am a quick learner and a team player who is always eager to learn new technologies and frameworks.
        </p>
      </div>
    </div>
  );
};

export default About;
