import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Blog1 from './components/blogs/blog1'; // Updated import to match actual file name
import Blog2 from './components/blogs/blog2'; // Updated import to match actual file name
import Blog3 from './components/blogs/blog3'; // Updated import to match actual file name
import Blog4 from './components/blogs/blog4'; // Updated import to match actual file name
import Blog5 from './components/blogs/blog5'; // Updated import to match actual file name
import Blog8 from './components/blogs/blog8'; // Updated import to match actual file name

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/1" element={<Blog1 />} /> {/* Updated route */}
          <Route path="/blog/2" element={<Blog2 />} /> {/* Updated route */}
          <Route path="/blog/3" element={<Blog3 />} /> {/* Updated route */}
          <Route path="/blog/4" element={<Blog4 />} /> {/* Updated route */}
          <Route path="/blog/5" element={<Blog5 />} /> {/* Updated route */}
          <Route path="/blog/8" element={<Blog8 />} /> {/* Updated route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;