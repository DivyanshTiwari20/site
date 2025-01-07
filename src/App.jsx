import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import Blog1 from './components/blogs/blog1'; // Updated import to match actual file name
import Blog2 from './components/blogs/blog2'; // Updated import to match actual file name

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;