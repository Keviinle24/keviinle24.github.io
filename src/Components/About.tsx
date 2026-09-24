import '../Styles/About.css';

const coursework = [
  'Calculus 1 for Sci/Engr',
  'Discrete Structures',
  'Introduction to Mathematical Reasoning',
  'Mathematics of Data Models',
  'Algorithms & Data',
  'Object-Oriented Design',
  'User Experience Design',
  'Web Development',
  'Mobile Application Development',
  'Foundations of Cybersecurity',
  'Computer Systems',
  'Foundations of Data Science',
  'Introduction to Databases',
  'Principles of Human-Computer Interaction',
];

const highlights = [
  { title: '1st Place', detail: 'PawHacks Hackathon · Curve' },
  { title: 'Funded', detail: 'Husky Startup Challenge · CamRa' },
  { title: 'Showcased', detail: "Gameheads' 10th Annual Video-Game Showcase · Harmony Notes" },
];

const interests = ['Design-Thinking', 'Customer Support', 'Ethical Hacking', 'Investing', 'Weight-lifting', 'Fostering the youth', 'Esports'];

export default function About() {
  return (
    <section id="about" className="about page-section">
      <h2 className="section-title">About Me</h2>
      <div className="container">
        <div className="about-grid">

          <div className="glass-card about-card reveal">
            <div className="about-label">Education</div>
            <div className="education-header">
              <div>
                <h3 className="education-school gradient-text">Northeastern University</h3>
                <p className="education-college">Khoury College of Computer Sciences · Boston, MA</p>
              </div>
              <span className="date-pill">Sept 2023 – Present</span>
            </div>
            <p className="education-degree">Candidate for Bachelor of Science in Computer Science</p>

            <div className="education-stats">
              <div className="stat">
                <span className="stat-value gradient-text">3.4</span>
                <span className="stat-label">GPA (out of 4.0)</span>
              </div>
              <div className="stat">
                <span className="stat-value gradient-text">May 2027</span>
                <span className="stat-label">Expected Graduation</span>
              </div>
            </div>

            <div className="about-label">Relevant Coursework</div>
            <div className="tag-list">
              {coursework.map((course) => <span className="tag" key={course}>{course}</span>)}
            </div>
          </div>

          <div className="glass-card about-card reveal">
            <div className="about-label">Highlights</div>
            <ul className="highlights">
              {highlights.map((highlight) => (
                <li key={highlight.title}>
                  <span className="highlight-title">{highlight.title}</span>
                  <span className="highlight-detail">{highlight.detail}</span>
                </li>
              ))}
            </ul>

            <div className="about-label">Interests</div>
            <div className="tag-list">
              {interests.map((interest) => <span className="tag" key={interest}>{interest}</span>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
