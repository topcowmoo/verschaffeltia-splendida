const Resume = () => {
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=14HMUWlrQyCJsmDsxAmQ10e0GKB6SLzZ9";

  const handleDownload = () => {
    window.location.href = resumeDownloadUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[-80px] bg-neutral-100">
      <div className="align-left">
        <h1 className="text-xl text-accent2 mb-4">Frontend Proficiencies</h1>
        <div className="flex flex-wrap mb-4">
          <img
            src="https://simpleskill.icons.workers.dev/svg?i=HTML5,CSS3,JavaScript,jQuery,React,vite,reactrouter,TailwindCSS,Bootstrap&perline=50&theme=light"
            alt="Frontend Skills"
            loading="lazy"
          />
        </div>
        <div>
          <h1 className="text-xl text-accent2 mb-4">Backend Proficiencies</h1>
          <div className="flex flex-wrap mb-4">
            <img
              src="https://simpleskill.icons.workers.dev/svg?i=nodedotjs,express,mongodb,mongoose,mysql,sequelize,jest,pwa,graphql,apollographql&perline=50&theme=light"
              alt="Backend Skills"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <button
        className="bg-mygray hover:bg-accent text-white hover:text-mygray font-bold py-2 px-4 rounded mt-4 mr-8"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
