import React from "react";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";

const Project = ({ title, description, link }) => (
  <div className="mb-4">
    <a href={link} className="text-white text-decoration-none">
      <h4>{title}</h4>
      <p className="text-white-50">{description}</p>
    </a>
  </div>
);

function Home() {
  const projects = [
    {
      title: "watchub",
      description: "YouTube Team Collaboration, Direct Uploads, and AI Magic for Effortless Content Creation!"
    },
    {
      title: "tini.fyi",
      description: "Generate Short Links Effortlessly for Simplified, Secure, and Ad-Free Sharing"
    },
    {
      title: "suresh.lm",
      description: "Personal site - Showcase Your Work with Simplicity!"
    },
    {
      title: "section.fyi",
      description: "Build Free Custom Page with Multiple Links for Effortless Online Presence!"
    },
    {
      title: "tools",
      description: "Your All-in-One Toolbox with Image to base64, Domain Tools, IP Checker, and More!"
    },
    {
      title: "gituser",
      description: "Discover GitHub User and Organization Details with a Sleek Interface"
    }
  ];

  return (
    <div className="container d-flex flex-column align-items-center" style={{ maxWidth: "800px" }}>
      <section className="text-center my-5">
        <h1 className="mb-4">hey there👋</h1>
        <p className="mb-4">
          I'm Divyansh Tiwari, a 20 y/o fullstack engineer from India, crafting things for the
          internet using the technologies I know and learn new stuff everyday. I mostly work with
          javascript ecosystem and tools.
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
            <h4>I feel like I'm living in the Golden Era.</h4>
            <p className="text-white-50">2024-02-11</p>
          </a>
        </div>
        <div className="mb-4">
          <a href="#" className="text-white text-decoration-none">
            <h4>How Life is Going as a 20-Year-Old Non-CS Software Engineer</h4>
            <p className="text-white-50">2024-02-03</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;