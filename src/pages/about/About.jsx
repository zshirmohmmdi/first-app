import React from 'react';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className="about-content">
        <h1 className='about-title'>About Me</h1>
        <p className='about-text'>
          Welcome to my personal blog! I am a developer and writer who loves
          sharing knowledge and experiences with others. This blog is a platform where I
          share my thoughts and insights about technology and programming.
        </p>
        <h2 className='about-subtitle'>My Journey</h2>
        <p className='about-text'>
          I started my journey in web development several months ago, and since then,
          I have been constantly learning and growing. I believe in the power of sharing knowledge
          and helping others in their learning journey.
        </p>
        <h2 className='about-subtitle' >What You'll Find Here</h2>
        <ul className='about-list'>
          <li>Programming tutorials and tips</li>
          <li>Technology reviews and insights</li>
          <li>Personal experiences and stories</li>
          <li>Best practices and coding patterns</li>
        </ul>
      </div>
    </div>
  );
}

export default About; 