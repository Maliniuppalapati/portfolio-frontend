import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
     
      <nav>
        <Link to="/">Home</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default Header;
