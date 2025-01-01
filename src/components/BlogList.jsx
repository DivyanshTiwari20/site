import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

function BlogList() {
  const blogs = [
    {
      title: 'Installing linux subsystem for win11',
      date: 'Oct 5, 2024',
      link: 'https://dev.to/divyansh_tiwari/how-to-install-windows-subsystem-for-linux-wsl-and-run-the-ubuntu-subsystem-on-windows-using-the-terminal-4m88',
      category: 'technical'
    },
    {
      title: 'My personal blogs && some weird thoughts',
      date: 'Oct 17, 2024',
      link: 'https://medium.com/@tmadhuvijay1982',
      category: 'thought'
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredAndSortedBlogs = blogs
    .filter(blog => 
      (selectedCategory === 'all' || blog.category === selectedCategory) &&
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="container d-flex flex-column justify-content-center min-vh-100">
      <header className={`blog-header ${isHeaderSticky ? 'sticky' : ''}`}>
        <h1 className="mb-4">Blog Posts</h1>
        
        <div className="category-filters">
          {['all', 'technical', 'thought', 'edu'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-container">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="sort-select"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </select>
        </div>
      </header>

      <section className="my-5">
        <div className="blog-list">
          {filteredAndSortedBlogs.map((blog, index) => (
            <article key={index} className="blog-item">
              <a 
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-link"
              >
                <div className="blog-content">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-date">{blog.date}</p>
                </div>
                <span className="blog-category">{blog.category}</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogList;