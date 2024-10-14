import React from "react";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-tiles">
        <div className="project-tile">
          <img src="project1.jpg" alt="Project 1" />
          <h4>Project 1</h4>
          <p>Description of Project 1</p>
          <a href="https://project1-link.com">View Project</a>
        </div>
        {/* ... more project tiles */}
      </div>
    </section>
  );
}

export default Projects;