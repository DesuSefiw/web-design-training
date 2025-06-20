import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>🌐 Website Design Training</h1>
        <p className="subtitle">Hands-on training to build responsive websites (HTML, JS, CSS) using modern tools like React, Angular, Tailwind & more.</p>
        <p><strong>3 days/week · 2-hour live sessions via Telegram or Google Meet</strong></p>
        <Link to="/register" className="register-button"> Register Now</Link>
      </section>

      <section className="schedule">
        <h2>🕒 Training Schedule</h2>
        <div className="schedule-grid">
          <div><strong>Days:</strong><br />Tuesday, Thursday & Saturday</div>
          <div><strong>Time:</strong><br />7:00 PM – 8:00/9:00 PM (Night 1-2/3 o'clock local time)</div>
          <div><strong>Mode:</strong><br />100% Remote via Telegram / Google Meet</div>
        </div>
      </section>

      <section className="why-join">
        <h2>💡 Why Join?</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><span>👨‍💻</span><h3>For Beginners</h3><p>Designed for absolute beginners. No prior experience needed!</p></div>
          <div className="benefit-card"><span>🏗️</span><h3>Real Projects</h3><p>Learn by building real-world websites and apps.</p></div>
          <div className="benefit-card"><span>⚛️</span><h3>Modern Tools</h3><p>Master React, Angular, Tailwind CSS, and other latest tech.</p></div>
          <div className="benefit-card"><span>🌙</span><h3>Night Classes</h3><p>Perfect timing for students and professionals.</p></div>
          <div className="benefit-card"><span>🏠</span><h3>Remote Learning</h3><p>Join from anywhere with live interactive support.</p></div>
          <div className="benefit-card"><span>🎯</span><h3>Hands-on Learning</h3><p>Practical, project-based approach ensures deep learning.</p></div>
        </div>
      </section>

      {/* 💼 Website Development Offer Section */}
      <section className="project-offer">
        <h2>💼 Need a Website Like This?</h2>
        <p>We can design and develop a custom website for your business, project, or organization—modern, responsive, and tailored to your needs.</p>
        <Link to="/project-request" className="offer-button">📨 Request a Project</Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
