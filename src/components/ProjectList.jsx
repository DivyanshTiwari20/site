import React from 'react';

function ProjectList() {
  const projects = [
    { name: 'Swasthya', description: 'Swasthya is an medical AI assistance just for you designed to provide accurate and reliable health information to individuals seeking guidance on their well-being.', link: 'https://tel-ai.vercel.app/', },
    { name: 'Edumate', description: 'EduMate is an innovative education AI chatbot designed to provide personalized learning support, guidance, and resources to students of all ages.', link: 'https://edumate-xygy.vercel.app/', },
    { name: 'Face emotion recognition model', description: 'It is an python CUI app that has capabilites to recognise your facial emotion using ML. ', link: '', repo: 'https://github.com/DivyanshTiwari20/DivyanshTiwari20-face-emotion-recognition-model' },
    { name: 'Film Recommendation chatbot', description: 'An chatbot app that can recomend you movies based on your mood.', link: '', repo: 'https://github.com/DivyanshTiwari20/film-recommender-chatbot' },
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
