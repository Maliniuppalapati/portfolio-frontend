import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Internships from "./internships";
import Courses from "./courses";
import Certifications from "./certifications";
import Projects from "./projects";
import "./homes.css";  // Import CSS

function Home() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/internships" className="navbar-link">Internships</Link>
        <Link to="/courses" className="navbar-link">Courses</Link>
        <Link to="/certifications" className="navbar-link">Certifications</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Your Career Boost Portal</h1>
        <p>Manage and track your internships, courses, certifications, and projects all in one place!</p>
        <Link to="/internships" className="cta-button">Get Started with Internships</Link>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <h2>What You Can Do Here</h2>
        <p>Explore the sections below to track your progress and build your career profile:</p>

        {/* Call-to-Action for Each Section */}
        <div className="cta-section">
          <Link to="/internships" className="cta-card">
            <h3>Internships</h3>
            <p>View and add your internships to enhance your resume.</p>
          </Link>
          <Link to="/courses" className="cta-card">
            <h3>Courses</h3>
            <p>Manage and track the courses you've completed.</p>
          </Link>
          <Link to="/certifications" className="cta-card">
            <h3>Certifications</h3>
            <p>Keep track of your achievements with certifications.</p>
          </Link>
          <Link to="/projects" className="cta-card">
            <h3>Projects</h3>
            <p>Showcase your projects and demonstrate your skills.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
