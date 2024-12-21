import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function BlogList() {
  const blogs = [
    { title: 'Installing linux subsystem for win11', date: 'Oct 5, 2024', link: 'https://dev.to/divyansh_tiwari/how-to-install-windows-subsystem-for-linux-wsl-and-run-the-ubuntu-subsystem-on-windows-using-the-terminal-4m88' },
    { title: 'My personal blogs && some weird thoughs', date: 'Oct 17, 2024', link: 'https://medium.com/@tmadhuvijay1982' },
  ];

  return (
    <div className="container">
      {blogs.map((blog, index) => (
        <div className="col-md-12 mb-4 my-5 d-flex justify-content-between align-items-center blog-item" key={index}>
          <h5 className="card-title">
            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-light">
              {blog.title}
            </a>
          </h5>
          <p className="card-text">{blog.date}</p>
        </div>
      ))}
    </div>
    
  );

}

export default BlogList;
