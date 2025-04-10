import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About ManageMate</h1>
        <p>Your trusted partner in product management</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          ManageMate is a modern, intuitive product management system designed to streamline your workflow,
          enhance collaboration, and simplify inventory tracking. Whether you're a small business or a growing
          enterprise, we help you stay organized and efficient.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses with intelligent tools that simplify product tracking and
          drive smarter decisions through real-time data and automation.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where businesses of all sizes can manage products effortlessly and efficiently,
          with complete transparency and total control.
        </p>
      </section>

     

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need support? Reach out to us at <a href="mailto:support@managemate.com">support@managemate.com</a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
