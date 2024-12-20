import React from 'react';
import ProjectList from './ProjectList';
import BlogList from './BlogList';
import { HashLink as Link } from 'react-router-hash-link';


function Home() {
  return (
    <div className="container text-light">
      <section className="my-5">
        <img src="src/assets/cat.jpg" alt="" style={{borderRadius:'50%', height:'9.9rem'}}/>
        <h1>hey there👋</h1>
        <p><hr />
        <br />
          Hi I'm <strong >Divyansh Tiwari</strong>, a 20 y/o Tech enthusiast from India, crafting things for the internet using the technologies I know and learn new stuff everyday. I mostly work with <strong>Python && C </strong> as my coding language. Meanwhile I am comfortable with React, bootstrap, flask etc for Web dev also i know ML and other stuff too.

        </p>
        <p>
          Presently I'm doing my <strong>Btech in Computer Science</strong>, Simultaneously making some projects that can gives kick to me.
        </p>
        <p>
        If you wanna hire me work your work as an freelance or some other project you can connect with me on WhatsApp <strong>8726506500.</strong>
        </p>
      </section>
      <section className="my-5">
        <h2>Projects</h2>
        <ProjectList />
      </section>
      <section className="my-5">
        <h2>Blogs</h2>
        <BlogList />
      </section>z
    </div>
  );
}

export default Home;
