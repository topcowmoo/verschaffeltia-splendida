import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiVite,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiSequelize,
  SiJest,
  SiPwa,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";

const Resume = () => {
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1hSb_Z3L3Jpcy1EhqLFv25VVbkN86aSm4";

  const handleDownload = () => {
    window.location.href = resumeDownloadUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[-80px]">
      <div className="align-left">
        <div className="container bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl border-4 border-mygray mt-[-20px]">
          <h1 className="text-xl text-mygray mb-4">Frontend Proficiencies</h1>
          <div className="flex flex-wrap mb-4">
            <SiHtml5 size={48} color="#4A5568" className="m-1" />
            <SiCss3 size={48} color="#4A5568" className="m-1" />
            <SiJavascript size={48} color="#4A5568" className="m-1" />
            <SiJquery size={48} color="#4A5568" className="m-1" />
            <SiReact size={48} color="#4A5568" className="m-1" />
            <SiVite size={48} color="#4A5568" className="m-1" />
            <SiReactrouter size={48} color="#4A5568" className="m-1" />
            <SiTailwindcss size={48} color="#4A5568" className="m-1" />
            <SiBootstrap size={48} color="#4A5568" className="m-1" />
          </div>
          <h1 className="text-xl text-mygray mb-4">Backend Proficiencies</h1>
          <div className="flex flex-wrap mb-4">
            <SiNodedotjs size={48} color="#4A5568" className="m-1" />
            <SiExpress size={48} color="#4A5568" className="m-1" />
            <SiMongodb size={48} color="#4A5568" className="m-1" />
            <SiMongoose size={48} color="#4A5568" className="m-1" />
            <SiMysql size={48} color="#4A5568" className="m-1" />
            <SiSequelize size={48} color="#4A5568" className="m-1" />
            <SiJest size={48} color="#4A5568" className="m-1" />
            <SiPwa size={48} color="#4A5568" className="m-1" />
            <SiGraphql size={48} color="#4A5568" className="m-1" />
            <SiApollographql size={48} color="#4A5568" className="m-1" />
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-mygray hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
