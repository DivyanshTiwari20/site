import React from 'react';
import ProjectList from './ProjectList';
import BlogList from './BlogList';

function Home() {
  return (
    <div className="container text-light">
      <section className="my-5">
        <h1>hey there👋</h1>
        <p><hr />
        <br />
          I'm <strong>Divyansh Tiwari</strong>, a 20 y/o Tech enthusiast from India, crafting things for the internet using the technologies I know and learn new stuff everyday. I mostly work with <strong>Python && C </strong> as my coding language. Meanwhile I am comfortable with React, bootstrap, flask etc for Web dev.
        </p>
        <p>
          Presently I'm doing my <strong>Btech in Computer Science</strong>, Simultaneously making some projects that can gives kick to me.
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