import {
  // Import icons for various technologies
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

// Define Resume functional component
const Resume = () => {
  // URL for downloading resume
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1_zlSw1E_vjtGn4QgCjAa6a468X7raNoa";

  // Function to handle resume download
  const handleDownload = () => {
    window.location.href = resumeDownloadUrl;
  };

  // JSX structure for Resume component
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[-80px]">
      <div className="align-left">
        <div className="container bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] ">
          {/* Frontend Proficiencies section */}
          <h1 className="text-xl text-black font-bold mb-4">
            Frontend Proficiencies
          </h1>
          <div className="flex flex-wrap mb-4">
            {/* Render icons for frontend technologies */}
            <SiHtml5 size={48} color="#454545" className="m-1" />
            <SiCss3 size={48} color="#454545" className="m-1" />
            <SiJavascript size={48} color="#454545" className="m-1" />
            <SiJquery size={48} color="#454545" className="m-1" />
            <SiReact size={48} color="#454545" className="m-1" />
            <SiVite size={48} color="#454545" className="m-1" />
            <SiReactrouter size={48} color="#454545" className="m-1" />
            <SiTailwindcss size={48} color="#454545" className="m-1" />
            <SiBootstrap size={48} color="#454545" className="m-1" />
          </div>
          {/* Backend Proficiencies section */}
          <h1 className="text-xl text-black font-bold mb-4">
            Backend Proficiencies
          </h1>
          <div className="flex flex-wrap mb-4">
            {/* Render icons for backend technologies */}
            <SiNodedotjs size={48} color="#454545" className="m-1" />
            <SiExpress size={48} color="#454545" className="m-1" />
            <SiMongodb size={48} color="#454545" className="m-1" />
            <SiMongoose size={48} color="#454545" className="m-1" />
            <SiMysql size={48} color="#454545" className="m-1" />
            <SiSequelize size={48} color="#454545" className="m-1" />
            <SiJest size={48} color="#454545" className="m-1" />
            <SiPwa size={48} color="#454545" className="m-1" />
            <SiGraphql size={48} color="#454545" className="m-1" />
            <SiApollographql size={48} color="#454545" className="m-1" />
          </div>
          {/* Download resume button */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-black hover:bg-accent text-white font-bold py-2 px-4 rounded shadow-lg"
              onClick={handleDownload} // Call handleDownload function on button click
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; // Export Resume component as default
