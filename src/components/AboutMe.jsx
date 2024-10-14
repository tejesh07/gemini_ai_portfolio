import React from 'react';
import { useSpring, animated } from 'react-spring';

function AboutMe() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <section className="about-me">
      <animated.h2 style={props}>About Me</animated.h2>
      <p>I'm a passionate software developer with a focus on React. I love building innovative web applications.</p>
      <p>'m a skilled software developer with a Masters in Computer Science from Campbellsville University, graduating in December 2024. Equipped with a strong foundation in HTML, CSS, JavaScript, React JS, DSA,  C++, and API development, I'm proficient in creating dynamic web applications using React.js. My leadership experience, coupled with exceptional communication and mathematical skills, allows me to collaborate effectively and adapt to new technologies quickly. I'm eager to apply my knowledge and skills to challenging software engineering roles.</p>
    </section>
  );
}

export default AboutMe;