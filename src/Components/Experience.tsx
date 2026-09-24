import '../Styles/Experience.css';

const experiences = [
  {
    role: 'Geospatial Analyst & Web Application Developer',
    company: 'Northeastern University - Federal Research Project',
    location: 'Boston, MA',
    dates: 'Jul 2026 – Dec 2026',
    points: [
      'Develop full-stack data analysis web applications for federally funded strategic research, building robust data pipelines and interactive web applications using Python, JavaScript, and SQL.',
      'Built Python-based geospatial data pipelines using satellite imagery (SAR and optical) and cloud-based geospatial platforms to detect physical infrastructure change over time.',
      'Designed and implemented a computer-vision detection algorithm (adaptive thresholding, connected-component analysis) to generate time-series activity metrics for cross-validation against independent data sources.',
    ],
    tags: ['Python', 'JavaScript', 'SQL', 'Geospatial Analysis', 'Computer Vision'],
  },
  {
    role: 'Full-Stack Web Developer & Technical Research Assistant',
    company: "Northeastern University's Sustainability Incubator",
    location: 'Boston, MA',
    dates: 'Jan 2025 – Aug 2025',
    points: [
      "Designed websites and optimized interactive data visualizations and dashboards using tools such as Tableau, React.js, and WordPress to showcase Northeastern's sustainability initiatives, enabling intuitive exploration of progress and impact.",
      'Leveraged MS Excel and AI models, such as BERT, to analyze sustainability-related data and assess patterns of sustainable versus non-sustainable practices.',
      'Enhanced dashboard functionality with dynamic features, including customizable filters, search options, and automated reporting capabilities, aligned with rankings requirements and stakeholder needs.',
      'Provided project management support for the Sustainability Innovation Living Lab, spreading sustainability awareness through Outlook and coordinating cross-disciplinary research efforts and sustainability demonstrations across campus.',
    ],
    tags: ['React.js', 'WordPress', 'Tableau', 'MS Excel', 'BERT'],
  },
  {
    role: 'Game Developer',
    company: 'Gameheads',
    location: 'Oakland, CA',
    dates: 'Feb 2024 – Jun 2025',
    points: [
      <>Developed a <a href="https://www.youtube.com/watch?v=NnzSG0QC4ck" target="_blank" rel="noreferrer">2D musical puzzle platformer</a> using Unity with a focus on atmospheric storytelling and minimalist visuals, where players control a whole note, solving music-themed puzzles to progress through levels.</>,
      "Showcased the game at Gameheads' 10th annual video-game showcase to professional game developers from game industry companies.",
    ],
    tags: ['Unity', 'Game Design'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience page-section">
      <h2 className="section-title">Experience</h2>
      <div className="container">
        <div className="timeline">
          {experiences.map((job) => (
            <div className="timeline-item reveal" key={job.role}>
              <span className="timeline-dot"></span>
              <div className="glass-card experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{job.role}</h3>
                    <p className="experience-company"><span className="gradient-text">{job.company}</span> · {job.location}</p>
                  </div>
                  <span className="date-pill">{job.dates}</span>
                </div>
                <ul className="experience-points">
                  {job.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
                <div className="tag-list">
                  {job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
