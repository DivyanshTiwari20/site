import React from "react";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";
import { Link, useLocation , Navigate} from 'react-router-dom';


const Project = ({ title, description, link, thumbnail }) => (
  <div className="project-card mb-4">
    <a href={link} target="blank" className="text-white text-decoration-none">
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
      thumbnail: "/edumate.png", // Replace with actual image path
      link:"https://edumate-xygy.vercel.app/"
    },
    {
      title: "Q&Awithdocs",
      description: "Get personalize Answere by uploading your docs.",
      thumbnail: "/ragapp.png", // Replace with actual image path
      link:"https://qnawithdocs.streamlit.app/"
    },
    {
      title: "chatapp",
      description: "Personal chatRoom - An chatapp using MERN stack!",
      thumbnail: "/chatapp.png",
      link:"https://chatapp-8tu8.onrender.com/" 
    },
    
  ];

  return (
    <div className="container d-flex flex-column align-items-center" style={{ maxWidth: "800px" }}>
      <section className="text-center my-5">
         <img src="/cat.jpg" alt="Your Name" className="img-fluid rounded-circle mb-3" style={{width: '200px', height: '200px'}} />
        {/* <h1 className="mb-4">hey there👋</h1> */}
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
        <h2 className="mb-4">PROJECTS</h2>
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
          <Link to="/blog/3" className="text-white text-decoration-none">
            <h4>Getting ready for the GSOC 2025.</h4>
            <p className="text-white-50">2025-01-06</p>
          </Link>
        </div>
        <div className="mb-4">
          <a href="/blog/1" className="text-white text-decoration-none">
            <h4>Installing Linux Subsystem for Windows 11</h4>
            <p className="text-white-50">2025-01-15</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;