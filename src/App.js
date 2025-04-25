import React from 'react';
import './App.css';
import logo from './rdgrps-logo.png';

function App() {
  // Function to handle button click
  const handleGetStarted = () => {
    window.location.href = '/signup.html';  // Redirect to signup page
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="RDGRPS Logo" className="logo" />
        <h1>Welcome to RDGRPS</h1>
        <p>Staffing Excellence Across Sectors</p>
        <button className="get-started" onClick={handleGetStarted}>
          Get Started
        </button> {/* Interactive button */}
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>RDGRPS is a staffing and HR agency dedicated to providing expert corporate HR services across all industries, excluding blue-collar roles. We aim to redefine recruitment by focusing on precision, speed, and cultural fit.</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Executive Hiring</li>
          <li>Middle Management Recruitment</li>
          <li>Project-Based Staffing</li>
          <li>Tech & Non-Tech HR Solutions</li>
        </ul>
      </section>

      <section className="why-us">
        <h2>Why Choose RDGRPS?</h2>
        <p>We blend deep industry knowledge with modern recruitment strategies to ensure you get the right people for the right roles—quickly and reliably.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>📧 Email: <a href="mailto:contact@rdgrps.com">contact@rdgrps.com</a></p>
        <p>📞 Phone: <a href="tel:+919789988659">+91 97899 88659</a></p>
        <p>🏢 Office Address:</p>
        <p>
          RDGRPS Private Limited<br />
          19/9 Sadasivametha Street,<br />
          Methanagar,<br />
          Chennai – 600029<br />
          Tamil Nadu, India
        </p>
      </section>

      <section className="callback">
        <h2>Request a Callback</h2>
        <form
          className="callback-form"
          action="https://formsubmit.co/brohit222@gmail.com"
          method="POST"
        >
          <label>Your Name</label>
          <input type="text" name="name" placeholder="John Doe" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="john@example.com" required />

          <label>Your Phone Number</label>
          <input type="tel" name="phone" placeholder="+91-9876543210" required />

          <label>Message</label>
          <textarea name="message" placeholder="How can we help you?" rows="4" required></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 RDGRPS – All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
