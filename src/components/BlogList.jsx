import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BlogList() {
  const navigate = useNavigate(); // Hook to access navigation
  const blogs = [
    {
      title: 'Installing linux subsystem for win11',
      date: 'Oct 5, 2024',
      link: '/blog/1', // Update link to point to the route
      category: 'technical'
    },
    {
      title: 'What if we create an quora for film enthusiast?',
      date: 'Jan 2, 2025',
      link: '/blog/2', // Update link to point to the route
      category: 'thought'
    },
    {
      title: 'Getting ready for the GSOC 2025',
      date: 'Jan 4, 2025',
      link: '/blog/3', // Update link to point to the route
      category: 'Personal'
    },
    {
      title: ' Tracking Progress of the GSOC 2025',
      date: 'Jan 6, 2025',
      link: '/blog/4', // Update link to point to the route
      category: 'Personal'
    },
    {
      title: ' Workdown != Results',
      date: 'Jan 6, 2025',
      link: '/blog/5', // Update link to point to the route
      category: 'thought'
    },
    {
      title: '  Difference between top 10% and top 1%',
      date: 'Jan 26, 2025',
      link: '/blog/6', // Update link to point to the route
      category: 'thought'
    },
    {
      title: 'Creating an app for my college',
      date: 'Feb 22, 2025',
      link: '/blog/8', // Update link to point to the route
      category: 'Personal'
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

  const handleBlogClick = (link) => {
    navigate(link); // Navigate to the blog detail page
  };

  return (
    <div className="container d-flex flex-column justify-content-center min-vh-100 my-3">
      <header className={`blog-header ${isHeaderSticky ? 'sticky' : ''}`}>
        {/* <h1 className="mb-4 my-5">Blog Posts</h1> */}
        
        <div className="category-filters fs-5 mb-4 my-5">
          {['all', 'technical', 'thought', 'Personal'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-container fs-6 mb-4">
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

      <section className="my-3">
        <div className="blog-list my-3">
          {filteredAndSortedBlogs.map((blog, index) => (
            <article key={index} className="blog-item my-1">
              <a 
                onClick={() => handleBlogClick(blog.link)} // Use onClick for navigation
                className="blog-link"
                style={{ cursor: "pointer" }} // Change cursor style for better UX
              >
                <div className="blog-content fs-6 mb-4">
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
