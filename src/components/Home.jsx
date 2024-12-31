import React from "react";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";
import { HashLink as Link } from "react-router-hash-link";

function Home() {
  return (
    <div className="container text-light">
      <section className="my-5">
        <img
          src="/cat.jpg"
          alt=""
          style={{ borderRadius: "50%", height: "15rem" }}
        />
        <h1 className="my-4" >hey there👋</h1>
        <hr />
        <p className="my-5">
          Hii I'm <strong>Divyansh Tiwari</strong>,a 2nd year computer science
          student from India, crafting things for the internet using the
          technologies I know and learn new stuff everyday. This is home on the
          internet...
        <br />
          I like to create projects that give me fun and also helps other. I am
          comfortable with many technologies and sort of an all rounder and have
          an good command at <strong> React.js, Node.js, MERN stack, fullstack dev, ML,
          RAG </strong>apps etc. I also created several project like an film recommender
          system, face emotion dictation model, An AI medical chatbot named
          .Swastya and for now i creating an productive social media app for
          student with AI integration.
        </p>
        <br />
        <h3>Language: </h3>
        <p>
          I mainly work with <strong>Python,javascript && C </strong>as my coding language.
          Meanwhile I am comfortable other stuff too.
        </p>
        <br />
        <h3>Career:</h3>
        <p>
          I worked as a freelancer, <strong>creating and selling websites and landing
          pages</strong>. And still do freelancing if i got an order. I'm doing my B.Tech
          in Computer Science specialization in cloud computing and AI, and
          trying to work as an freelancer. Simultaneously, making projects that
          can gives kick to me. I've taking part in several <strong>hackathons </strong>as well,
          like by Build fast with AI hackathon and was in the top five teams, I
          have also pitched my <strong>startup idea </strong>on my college competition.
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
