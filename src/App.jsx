import './App.css'
import profileImg from './assets/raghu.jpeg'

function App() {
  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">RAGHU</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-text">
          <h1 className="hero-name">Raghu <span className="highlight">Lakshmi Narayan</span></h1>
          <h2 style={{ 
  fontSize: '2rem', 
  fontWeight: 'bold', 
  color: '#ffffff', 
  margin: '10px 0' 
}}>
  Full Stack Developer
</h2>
          {/* FIXED: Wrapped in a proper mailto link */}
          <a href="mailto:raghunarayan28@gmail.com" className="btn-glow">Get Connected</a>
        </div>
        <div className="hero-image-container">
          <div className="circle-bg">
            <img src={profileImg} alt="Raghu Profile" className="profile-img" />
          </div>
        </div>
      </header>

      {/* Highlights / Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="icon-box">⚙️</div>
          <h3>Deeper Skillset</h3>
          <p>Building scalable web APIs and optimizing query execution logic.</p>
        </div>
        <div className="feature-card">
          <div className="icon-box">💼</div>
          <h3>Creative Work</h3>
          <p>Designing elegant user interfaces with responsive component architectures.</p>
        </div>
        <div className="feature-card">
          <div className="icon-box">💎</div>
          <h3>Strong Dedication</h3>
          <p>Continuous commitment to mastering algorithms and clean coding design models.</p>
        </div>
      </section>

      {/* About & Bio Section */}
      <section id="about" className="about-section">
        <p className="section-subtitle">About Me</p>
        <h2 className="section-title">A Passionate Developer Who Loves to Code</h2>
        
        <div className="bio-container">
          <div className="bio-text">
            <h3>My Bio</h3>
            <p>
              I am a Full Stack Developer specialized in building robust web applications. I love implementing efficient database-driven workflows, asynchronous server engines, and fluid responsive layouts.
            </p>
            
            <table className="info-table">
              <tbody>
                <tr>
                  <td><strong>Name</strong><br/>Raghu Lakshmi Narayan</td>
                  <td><strong>Address</strong><br/>Bangalore, India</td>
                </tr>
                <tr>
                  <td><strong>Email</strong><br/>raghunarayan28@gmail.com</td>
                  <td><strong>Phone</strong><br/>+91-6363323836</td>
                </tr>
              </tbody>
            </table>
            
            <a href="https://www.linkedin.com/in/raghulnarayan/" target="_blank" rel="noreferrer" className="btn-glow small">My LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <p className="section-subtitle">Projects</p>
        <h2 className="section-title">Featured Applications</h2>

        <div className="project-card">
          <div className="project-header">
            <h3>Mission Masters</h3>
            <span className="project-tag">Latest</span>
          </div>
          <p>A high-performance full-stack web application designed for automated status tracking and user goal management.</p>
          <ul>
            <li>Engineered an asynchronous API using <strong>FastAPI</strong> backed by cloud-hosted <strong>MongoDB Atlas</strong> database clusters.</li>
            <li>Integrated secure 4-digit OTP registration and recovery cycles running over automated HTTP micro-dispatch systems.</li>
            <li>Designed interactive dashboard views with dynamic, live task progression and visual state management charts in <strong>React</strong>.</li>
          </ul>
          <div className="button-group">
            <div className="button-group">
  <a href="https://mission-masters.vercel.app" target="_blank" rel="noreferrer" className="btn-project primary">Live App</a>
  <a href="https://github.com/raghulnarayan/perjober" target="_blank" rel="noreferrer" className="btn-project secondary">GitHub Code</a>
  <a href="#home" className="btn-project secondary">← Back to Top</a>
</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <p className="section-subtitle">Skills</p>
        <h2 className="section-title">I Work Hard to Improve My Skills Regularly</h2>
        
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-info"><span>Python (FastAPI, Flask, Django)</span><span>95%</span></div>
            <div className="bar"><div className="progress python"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>JavaScript (React)</span><span>85%</span></div>
            <div className="bar"><div className="progress react"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>Databases (MongoDB, SQL)</span><span>90%</span></div>
            <div className="bar"><div className="progress db"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>Git & Cloud Pipelines</span><span>80%</span></div>
            <div className="bar"><div className="progress git"></div></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App