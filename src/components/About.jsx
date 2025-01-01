import React from 'react';

function About() {
  return (
    <div className="container d-flex flex-column justify-content-center min-vh-100">
      <section className="my-5">
      <img src="/cat.jpg" alt="Your Name" className="img-fluid rounded-circle mb-3" style={{width: '200px', height: '200px'}} />
        <h1 className="mb-4">About Me</h1>
        <p>
          I'm computer science student in Lucknow. I start learning about computer 
          since my 8th grade then thought of becoming an engineer so I give JEE 
          entrance exam and failed. Currently, i am completing my B.Tech 
          simultaneously making amazing open source projects.
        </p>
        
        <h3 className="mt-5 mb-4">💻 What I Do:</h3>
        <p>
          I like to code in <strong>python</strong> and <strong>C</strong> as my 
          primary coding languages.
        </p>
      </section>
    </div>
  );
}

export default About;