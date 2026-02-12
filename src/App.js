import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>TechNova</h2>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <header className="hero">
        <h1>We Build Scalable Cloud Solutions</h1>
        <p>DevOps • Cloud • Web Development • Automation</p>
        <button>Contact Us</button>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card">
            <h3>Cloud</h3>
            <p>AWS, Terraform, Kubernetes</p>
          </div>

          <div className="card">
            <h3>DevOps</h3>
            <p>CI/CD, Docker, Jenkins</p>
          </div>

          <div className="card">
            <h3>Web Apps</h3>
            <p>React, Node.js, Microservices</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <p>We delivered 50+ enterprise cloud projects.</p>
      </section>

      <footer>
        <p>© 2026 TechNova Pvt Ltd</p>
      </footer>
    </div>
  );
}

export default App;

