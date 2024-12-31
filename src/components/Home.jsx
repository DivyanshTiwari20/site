import React from "react";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <div className="container text-light">
      <section className="my-5 text-center">
        <img
          src="/cat.jpg"
          alt="Profile"
          style={{ borderRadius: "50%", height: "15rem" }}
        />
        <h1 className="my-4">Hey there👋</h1>
        <hr />
        <p className="my-5">
          Hi, I'm <strong>Divyansh Tiwari</strong>, a 2nd year computer science
          student from India, crafting things for the internet using the
          technologies I know and learning new stuff every day. This is my home on the
          internet...
          <br />
          I like to create projects that are fun and also help others. I am
          comfortable with many technologies and consider myself an all-rounder with a good command of 
          <strong> React.js, Node.js, MERN stack, full-stack development, ML,
          RAG </strong> apps, etc. I have also created several projects like a film recommender
          system, a face emotion detection model, and an AI medical chatbot named
          "Swastya." Currently, I am creating a productive social media app for
          students with AI integration.
        </p>
        <br />
        <h3>Languages:</h3>
        <p>
          I mainly work with <strong>Python, JavaScript, and C</strong> as my coding languages.
          Meanwhile, I am comfortable with other technologies as well.
        </p>
        <br />
        <h3>Career:</h3>
        <p>
          I have worked as a freelancer, creating and selling websites and landing
          pages. I still do freelancing if I receive an order. I'm pursuing my B.Tech
          in Computer Science with a specialization in cloud computing and AI,
          while also trying to work as a freelancer. Simultaneously, I'm making projects that
          excite me. I've participated in several <strong>hackathons</strong>, including the Build Fast with AI hackathon where I was in the top five teams. 
          I have also pitched my <strong>startup idea</strong> in my college competition.
        </p>
      </section>
      <section className="my-5">
        <h2>Projects</h2>
        <ProjectList />
      </section>
      <section className="my-5">
        <h2>Blogs</h2>
        <BlogList />
      </section>
    </div>
  );
}

export default Home;
