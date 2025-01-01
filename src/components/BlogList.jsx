import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function BlogList() {
  const blogs = [
    {
      title: 'Installing linux subsystem for win11',
      date: 'Oct 5, 2024',
      link: 'https://dev.to/divyansh_tiwari/how-to-install-windows-subsystem-for-linux-wsl-and-run-the-ubuntu-subsystem-on-windows-using-the-terminal-4m88'
    },
    {
      title: 'My personal blogs && some weird thoughs',
      date: 'Oct 17, 2024',
      link: 'https://medium.com/@tmadhuvijay1982'
    },
  ];

  return (
    <div className="container d-flex flex-column justify-content-center min-vh-100">
      <section className="my-5">
        <h1 className="mb-4">Blog Posts</h1>
        <div className="blog-list">
          {blogs.map((blog, index) => (
            <article key={index} className="blog-item mb-4">
              <a 
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-date">{blog.date}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogList; 