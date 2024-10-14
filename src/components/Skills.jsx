import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li><FontAwesomeIcon icon="fa-brands fa-react" /> React</li>
        <li><FontAwesomeIcon icon="fa-brands fa-javascript" /> JavaScript</li>
        {/* ... more skills */}
      </ul>
    </section>
  );
}

export default Skills;