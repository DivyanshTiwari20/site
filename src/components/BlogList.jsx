import React from 'react';

function BlogList() {
  const blogs = [
    { title: 'Understanding AI', date: 'Oct 5, 2023', link: 'https://vani.club' },
    { title: 'Introduction to Fullstack Development', date: 'Sep 20, 2023', link: 'https://vani.club' },
  ];

  return (
    <div className="row">
      {blogs.map((blog, index) => (
        <div className="col-md-12 mb-4 d-flex justify-content-between align-items-center blog-item" key={index}>
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
