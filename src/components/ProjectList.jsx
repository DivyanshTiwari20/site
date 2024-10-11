import React from 'react';

function ProjectList() {
  const projects = [
    { name: 'Swasthya', description: 'YouTube Team Collaboration, Direct Uploads, and AI Magic for Effortless Content Creation!', link: 'https://tel-ai.vercel.app/', },
    { name: 'Edumate', description: 'Generate Short Links Effortlessly for Simplified, Secure, and Ad-Free Sharing!', link: 'https://edumate-xygy.vercel.app/', },
    { name: 'Face emotion recognition model', description: 'Personal site - Showcase Your Work with Simplicity!', link: '', repo: 'https://github.com/DivyanshTiwari20/DivyanshTiwari20-face-emotion-recognition-model' },
    { name: 'Film Recommendation chatbot', description: 'Build Free Custom Page with Multiple Links for Effortless Online Presence!', link: '', repo: 'https://github.com/DivyanshTiwari20/film-recommender-chatbot' },
    // { name: 'tools', description: 'Your All-in-One Toolbox with Image to Base64, Domain Tools, IP Checker, and More!', link: 'https://tools.example.com', repo: 'https://github.com/suresh/tools' },
    // { name: 'gituser', description: 'Discover GitHub User and Organization Details with a Sleek Interface', link: 'https://gituser.example.com', repo: 'https://github.com/suresh/gituser' },
  ];

  return (
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-6 mb-4" key={index}>
          <div className="text-light">
            <div className="card-body">
              <h5 className="card-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-light">
                  {project.name}
                </a>
              </h5>
              <p className="card-text">{project.description}</p>
              <p className="card-text">
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-light">
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
