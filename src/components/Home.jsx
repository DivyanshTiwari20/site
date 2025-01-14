import React from "react";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";

const Project = ({ title, description, link, thumbnail }) => (
  <div className="project-card mb-4">
    <a href={link} className="text-white text-decoration-none">
      <div className="project-thumbnail">
        <img src={thumbnail || "/api/placeholder/400/200"} alt={title} />
      </div>
      <h4 className="mt-3">{title}</h4>
      <p className="text-white-50">{description}</p>
    </a>
  </div>
);

function Home() {
  const projects = [
    {
      title: ".Edumate",
      description: "Productive education platform for students.",
      thumbnail: "/edumate.png" // Replace with actual image path
    },
    {
      title: "Q&Awithdocs",
      description: "Get personalize Answere by uploading your docs.",
      thumbnail: "/ragapp.png" // Replace with actual image path
    },
    {
      title: "chatapp",
      description: "Personal chatRoom - An chatapp using MERN stack!",
      thumbnail: "/chatapp.png" // Replace with actual image path
    },
    // {
    //   title: "section.fyi",
    //   description: "Build Free Custom Page with Multiple Links for Effortless Online Presence!"
    // },
    // {
    //   title: "tools",
    //   description: "Your All-in-One Toolbox with Image to base64, Domain Tools, IP Checker, and More!",
    //   thumbnail: "/api/placeholder/400/200" // Replace with actual image path
    // },
    // {
    //   title: "gituser",
    //   description: "Discover GitHub User and Organization Details with a Sleek Interface",
    //   thumbnail: "/api/placeholder/400/200" // Replace with actual image path
    // }
  ];

  return (
    <div className="container d-flex flex-column align-items-center" style={{ maxWidth: "800px" }}>
      <section className="text-center my-5">
         <img src="/cat.jpg" alt="Your Name" className="img-fluid rounded-circle mb-3" style={{width: '200px', height: '200px'}} />
        <h1 className="mb-4">hey there👋</h1>
        <p className="mb-4">
          I'm Divyansh Tiwari, a 20 y/o fullstack engineer from India, crafting things for the
          internet using the technologies I know and learn new stuff everyday. This is my little home of the internet!
        </p>
        {/* <p className="mb-5">
          Presently I'm working at <a href="#" className="text-decoration-none">Maxim AI</a> building framework for testing and monitoring AI
          applications.
        </p> */}
      </section>

      <section className="w-100 mb-5">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <Project {...project} />
            </div>
          ))}
        </div>
      </section>

      <section className="w-100 mb-5">
        <h2 className="mb-4">Blogs</h2>
        <div className="mb-4">
          <a href="#" className="text-white text-decoration-none">
            <h4>Getting ready for the GSOC 2025.</h4>
            <p className="text-white-50">2025-01-06</p>
          </a>
        </div>
        <div className="mb-4">
          <a href="#" className="text-white text-decoration-none">
            <h4>Are AI agents gonna be the future?</h4>
            <p className="text-white-50">2025-01-15</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;