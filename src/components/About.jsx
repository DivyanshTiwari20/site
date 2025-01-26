import React from "react";

function About() {
  return (
    <div className="container d-flex flex-column min-vh-100">
      <section className="my-5">
        <div style={{ textAlign: "center" }}>
          {" "}
          {/* Centering the image only */}
          <img
            src="/cat.jpg"
            alt="Your Name"
            className="img-fluid rounded-circle mb-5"
            style={{
              width: "200px",
              height: "200px",
              display: "block",
              margin: "0 auto",
            }} // Ensure it's a block element and centered
          />
        </div>
        {/* <h1 className="mb-4">About Me</h1> */}
        <p>
          I'm Divyansh Tiwari, a Computer Science undergraduate based in
          Lucknow, combining academic excellence with hands-on project
          development and freelance work. As a full-stack developer and machine
          learning enthusiast, I thrive on building solutions that matter.
        </p>

        <h4 className="mt-5 mb-4">My Technical Arsenal:</h4>
        <ul>
          <li>
            Full Stack Development: MERN Stack (MongoDB, Express.js, React.js,
            Node.js), JavaScript{" "}
          </li>
          <li>Programming Languages: Python, C, JavaScript</li>
          <li>
            AI/ML: Experience with RAG applications, LLM fine-tuning, emotion
            detection models{" "}
          </li>
          <li>
            Tools & Technologies: Git, Linux, UI/UX Design, Gemini API
            integration
          </li>
        </ul>

        <h4 className="mt-5 mb-4">Notable Projects:</h4>
        <ul>
          <li>
            Edumate: Developed an AI-powered educational chatbot providing
            mental health support and study resources.
          </li>
          <li>
            Swastya: Created a medical chatbot for health-related queries.
          </li>
          <li>
            Zero to Python: Curated a comprehensive GitHub repository with 100+
            programming challenges spanning competitive programming, ML, and
            DSA.
          </li>
          <li>
            Real-time Emotion Detection System: Built using machine learning for
            facial expression analysis.
          </li>
          <li>
            Multiple RAG (Retrieval-Augmented Generation) Applications: For
            document analysis and Q&A.
          </li>
        </ul>

        <h4 className="mt-5 mb-4">Achievements:</h4>
        <ul>
          <li>
            Proudly placed in the top 20 at the "Build Fast with AI" hackathon.
          </li>
          <li>Participated in Web3 hackathons including Gaia and Neo.</li>
          <li>
            Currently exploring opportunities in Google Summer of Code while
            taking on freelance projects in web development and ML solutions.
          </li>
        </ul>

        <h4 className="mt-5 mb-4">Interests:</h4>
        <p>
          I'm passionate about low-level programming, machine learning, and
          creating solutions that address real-world challenges. I'm looking to
          connect with fellow developers, potential clients for freelance work,
          and technology enthusiasts. Open to remote opportunities and
          collaborative projects in full-stack development, ML/AI, data science,
          and also something out of my comfort zone.
        </p>
      </section>
    </div>
  );
}

export default About;
