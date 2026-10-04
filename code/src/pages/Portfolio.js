import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import cyberCampaignPhoto from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-22 at 10.14.53 PM.jpeg';
import researchPhoto from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.32.30 PM.jpeg';
import mentoraPhoto from '../assets/mentora/hero.jpeg';
import nationalRecognitionPhoto from '../assets/national level/WhatsApp Image 2026-08-22 at 10.14.53 PM.jpeg';
import profilePic from '../assets/profile.png';
import technicalResume from '../assets/Aniket_Bhudke_Technical_Resume.docx';
import Terminal from '../components/Terminal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, faEnvelope, faPhone, faMapMarkerAlt,
  faGraduationCap, faCertificate, faTrophy, faShieldHalved, faLaptopCode,
  faAward, faTerminal, faChartBar, faDownload, faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

/* ── DATA ── */
const skills = [
  { name: 'Python', level: 92 }, { name: 'FastAPI', level: 90 }, { name: 'REST APIs', level: 92 },
  { name: 'Django', level: 85 }, { name: 'PostgreSQL & SQL', level: 88 }, { name: 'AWS (EC2 & S3)', level: 80 },
  { name: 'React', level: 78 }, { name: 'JavaScript & JS', level: 82 }, { name: 'HTML & CSS', level: 88 },
  { name: 'Git & GitHub', level: 90 }, { name: 'AI Integration', level: 78 }, { name: 'Problem Solving', level: 88 },
];

const educationHistory = [
  {
    id: 1, degree: 'M.C.A. - Data Science',
    institution: 'MIT College of Management Pune', duration: '2025 - 2027',
    grade: 'CGPA: 7.73 / 10',
    details: 'Specializing in Data Science foundations, RESTful API design, database management, and scalable cloud-based backend services.',
  },
  {
    id: 2, degree: 'BCA - Computer Applications (Full Time)',
    institution: 'Shankarlal Khandelwal Arts, Science And Commerce College, Akola',
    duration: '2022 - 2025', grade: 'CGPA: 7.77 / 10',
    details: 'Acquired core competencies in programming paradigms, computer applications, data structures, and database management systems.',
  },
  {
    id: 3, degree: '12th Grade (Science)', institution: 'Ratanlal Maharaj High School, Chitalwadi',
    duration: 'Completed 2022', grade: 'Percentage: 61.17 / 100',
    details: 'Completed higher secondary education under the MSBSHSE board with focus on science disciplines.',
  },
  {
    id: 5, degree: '10th Grade', institution: 'Sahadevrao Bhople Vidayalay, Hiwarkhed',
    duration: 'Completed 2020', grade: 'Percentage: 91.60 / 100',
    details: 'Secondary school education completed under MSBSHSE with academic excellence.',
  },
];

const achievements = [
  { 
    id: 1, 
    title: '1st Prize in Best Paper Presentation', 
    category: 'Research & Innovation', 
    detail: 'Secured 1st Prize at the 8th International Symposium on Innovation in Global Technology for our research paper on AI-Based Intelligent Traffic Management.', 
    icon: faAward,
    photo: researchPhoto,
    photoAlt: 'Research paper presentation at the international symposium',
    highlightBadge: '🏆 1st Prize Winner',
    stats: '8th Int. Symposium',
    link: '/stories/research-award',
    ctaLabel: 'Read the research story'
  },
  { 
    id: 2, 
    title: 'MIT ADT Hackathon – Top 20 Finalist', 
    category: 'Hackathon', 
    detail: 'Led the Mentora project in the MIT ADT Hackathon, where our team made it to the Top 20 finalist round among 1,200+ competing teams. Mentora is an AI-powered student guidance platform that personalizes learning paths and career direction.', 
    icon: faTrophy,
    photo: mentoraPhoto,
    photoAlt: 'Mentora project interface',
    highlightBadge: '🚀 Top 20 / 1,200+ Teams',
    stats: '1,200+ Teams',
    link: '/projects/mentora-career-educational-advisor',
    ctaLabel: 'View Mentora story'
  },
  { 
    id: 3, 
    title: 'Cyber Shiksha for Cyber Suraksha – 2-Year Award', 
    category: 'Cyber Security', 
    detail: 'Recognized as a 2-Year Award Holder in the Quick Heal Foundation campaign for active participation and contribution to cyber security awareness.', 
    icon: faShieldHalved,
    photo: cyberCampaignPhoto,
    photoAlt: 'Cyber Shiksha campaign recognition',
    highlightBadge: '🛡️ 2-Year Award Holder',
    stats: 'Quick Heal Foundation',
    link: '/stories/cyber-shiksha',
    ctaLabel: 'Read my two-year journey'
  },
  { 
    id: 4, 
    title: 'National Level Recognition', 
    category: 'Cyber Security', 
    detail: 'National level recognition for active contribution towards cyber security awareness programs.', 
    icon: faShieldHalved,
    photo: nationalRecognitionPhoto,
    photoAlt: 'National Cyber Shiksha recognition',
    highlightBadge: '🇮🇳 National Level',
    stats: 'National Awareness',
    link: '/stories/national-recognition',
    ctaLabel: 'Read my 2025 journey'
  },
  { 
    id: 5, 
    title: 'Competitive Programming Practitioner', 
    category: 'Problem Solving', 
    detail: 'Active solver and coder on competitive programming platforms including LeetCode, HackerRank, and GeeksforGeeks.', 
    icon: faLaptopCode,
    highlightBadge: '⭐ Multi-Platform Coder',
    stats: 'LeetCode & HackerRank',
    link: '/stories/competitive-programming',
    ctaLabel: 'Explore my coding journey'
  }
];

const experiences = [
  {
    id: 1, role: 'Python Backend Intern', company: 'Leadturtle Technology Services',
    location: 'IT / Computers - Software', duration: '08 Nov, 2023 - 30 Jan, 2024',
    skills: ['Python', 'FastAPI', 'REST API', 'PostgreSQL', 'AWS EC2', 'AWS S3', 'Backend Development', 'Git & GitHub', 'DBMS', 'Problem Solving', 'Debugging', 'Version Control'],
    description: 'Completed a 150-hour internship program in Python (FastAPI) Backend Development at Leadturtle Technology Services from 08 Nov 2023 to 30 Jan 2024. Worked on developing backend services and REST APIs using Python and FastAPI framework. Gained practical experience in PostgreSQL database management, AWS EC2 and S3 cloud services, and version control using Git and GitHub. Assisted in backend architecture development, API integration, debugging, and performance optimization for web applications. Collaborated with the development team and enhanced technical and problem-solving skills through real-world project experience.',
  },
  {
    id: 2, role: 'Tech Analyst Intern', company: 'Way.CZ International',
    location: 'IT / Technology', duration: 'Internship Completion Certificate',
    skills: ['Data Analysis', 'Technology Analysis', 'Python', 'SQL', 'Problem Solving', 'Research', 'Data Visualization', 'Communication', 'Teamwork'],
    description: 'Completed a Tech Analyst Internship at Way.CZ International, gaining practical experience in technology analysis, data handling, problem-solving, and business-oriented technical tasks. Worked on analyzing information, understanding technology requirements, supporting project activities, and applying analytical and technical skills to real-world scenarios. Developed professional skills in research, data analysis, communication, teamwork, and structured problem-solving while working in a practical technology environment.',
  },
];

const certificates = [
  { id: 1, title: 'Data Foundations', issuer: 'Google', badge: 'Verified ✔️', file: '/certificates/google-foundation-data.pdf', description: 'Covers the data analytics workflow: framing questions, working with structured data, basic analysis, and communicating insights for business decisions.' },
  { id: 2, title: 'Python Scripting & Automation', issuer: 'Google', badge: 'Verified ✔️', file: '/certificates/google-python.pdf', description: 'Builds practical Python skills for scripting and automation—syntax, control flow, data structures, functions, and working with files and APIs.' },
  { id: 3, title: 'Data Science Fundamentals', issuer: 'IBM', badge: 'Verified ✔️', file: '/certificates/ibm-data-science.pdf', description: 'End-to-end data science fundamentals: open-source tools, data preparation, visualization, statistical thinking, and introductory machine learning workflows.' },
  { id: 4, title: 'Python Data Structures', issuer: 'University of Michigan', badge: 'Verified ✔️', file: '/certificates/university-michigan-data-structures.pdf', description: 'Deepens core computer science skills in Python—lists, dictionaries, files, and algorithms—so code is efficient, readable, and ready for larger applications.' },
  { id: 5, title: 'Full Stack Python Developer', issuer: 'Naresh IT', badge: '91.60% Grade', file: '/certificates/naresh-it.pdf', description: 'Completed the Full Stack Python Developer certification program with a 91.60/100 aggregate score, mastering Python programming, FastAPI, Django, database architectures, and frontend integrations.' },
  { id: 6, title: 'Data Analytics Professional', issuer: 'Meta', badge: 'Verified ✔️', file: '/certificates/meta-data-analytics.pdf', description: 'Professional analytics foundations: defining metrics, querying and transforming data, visualization, and telling clear stories with dashboards and reports.' },
];

const seminarSkills = ['Cyber Security Awareness', 'Public Speaking', 'Communication Skills', 'Digital Safety Awareness', 'Team Collaboration', 'Leadership', 'Social Awareness', 'Presentation Skills', 'Community Engagement'];

const coCurricular = [
  'Smart India Hackathon 2025 - Top 20 Finalist',
  'Research Paper Presentation on AI-Based Traffic Management System',
  'Best Paper Presentation Award - ISIGT 2025',
  'Competitive Programming Practice on LeetCode, HackerRank, and GeeksforGeeks',
  'Technical Seminars & Workshops',
];

const extraCurricular = [
  'Cyber Warrior - Cyber Shiksha for Cyber Suraksha Campaign',
  'Delivered 21 Cybersecurity Awareness Presentations',
  'Reached Approximately 6,900 Students',
  'Public Speaking and Technical Presentations',
  'Team Collaboration and Event Coordination',
];

const personalInfo = [
  { label: 'Education', value: 'MCA - Data Science\nMIT-ADT University, Loni Kalbhor\n2025-2027' },
  { label: 'Career Focus', value: 'Data Analytics, Python Development, Business Intelligence' },
  { label: 'Technical Interests', value: 'Python, SQL, Data Visualization, Backend Development, AI Technologies' },
  { label: 'Professional Interests', value: 'Problem Solving, Research, Continuous Learning, Technical Innovation' },
  { label: 'Based In', value: 'Pune, Maharashtra, India' },
];

/* ── COMPONENT ── */
export default function Portfolio() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [skillsRef, skillsVisible] = useInView({ threshold: 0.2 });
  const [resumeTab, setResumeTab] = useState('experience');
  const [credentialsTab, setCredentialsTab] = useState('certifications');
  const [skillsView, setSkillsView] = useState('bars');
  const [projectFilter, setProjectFilter] = useState('all');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShowTop(y > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* ── NAVBAR ── */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <ul id="portfolio-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'certifications', 'resume', 'contact'].map((s) => (
            <li key={s}>
              <button className={s === 'home' ? 'active-link' : ''} onClick={() => scrollTo(s === 'certifications' ? 'credentials' : s)}>
                {s === 'certifications' ? 'Certifications' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-connect" onClick={() => scrollTo('contact')}>
            <FontAwesomeIcon icon={faEnvelope} /> Let's Connect
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="portfolio-navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      {/* ── HERO ── */}
      <section id="home" className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <p className="greeting">HELLO, I'm</p>
            <h1>Aniket <span className="accent">Bhudke</span></h1>
            <h2 className="role">Python Developer | <span className="accent">Data Analyst</span> | Full-Stack Developer</h2>
            
            <p className="hero-desc">
              MCA Data Science student with hands-on experience in Python, SQL, Data Analytics, and Full-Stack Development. I build practical solutions through data-driven insights and modern technologies.
              <br/><br/>
              Passionate about transforming data into meaningful insights, developing dashboards, and solving real-world problems through continuous learning and innovation.
            </p>
            
            <div className="hero-actions">
              <a href={technicalResume} download className="btn-primary">
                <FontAwesomeIcon icon={faDownload} /> View Resume
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-outline">
                <FontAwesomeIcon icon={faEnvelope} /> Contact Me
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-top">
              <div className="icon-bars"><div className="bar1"/><div className="bar2"/><div className="bar3"/></div>
              <div className="card-text">
                <strong>Analyze<br/>Visualize<br/>Solve</strong>
                <p>Data-driven solutions<br/>for a better tomorrow.</p>
              </div>
            </div>
            <div className="floating-text mid-text">
              "Turning<br/>Data into<br/>Meaningful<br/>Impact"
            </div>
            <div className="floating-card card-right">
              <div className="card-text right-align">
                <strong>Insights<br/>Strategy<br/>Growth</strong>
                <p>Continuous<br/>Learning</p>
              </div>
            </div>
            <div className="floating-card card-bottom">
              <div className="card-text">
                <strong>Data<br/>Technology</strong>
                <p>Better Decisions</p>
              </div>
            </div>
            <div className="profile-wrapper">
              <img src={profilePic} alt="Aniket Bhudke" className="profile-img-new" />
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollTo('about')}>
          <div className="mouse"></div>
          <span>Scroll Down</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about section">
        <Reveal className="section-header">
          <h2>About <span className="accent">Me</span></h2>
          <div className="underline" />
        </Reveal>
        <div className="about-content">
          <Reveal className="about-text" delay={80}>
            <p>
              I am an <span className="accent">M.C.A. (Data Science)</span> student at MIT College of Management Pune with a strong foundation in Python, FastAPI, REST APIs, and full-stack web development. I specialize in building scalable, secure, and responsive web applications with robust backend architectures and data-driven intelligence.
            </p>
            <p>
              My hands-on experience spans developing RESTful APIs, cloud deployment (AWS EC2, S3), database management (PostgreSQL, SQLite), and integrating AI-based solutions. I have refined these skills through a backend development internship at <span className="accent">Leadturtle Technology Services</span> and key academic projects including Mentora, the MIT ADT Mess Hub, and Event Decoration Booking platform.
            </p>
            <p>
              I am an active participant in hackathons, research presentations, and cyber security awareness programs. I enjoy solving complex problems, writing clean code, and working in collaborative teams to build impactful software solutions.
            </p>
            <div className="about-info">
              <div><FontAwesomeIcon icon={faGraduationCap} className="info-icon" /><span>MCA (Data Science), MIT ADT Pune</span></div>
              <div><FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" /><span>Pune, Maharashtra, India</span></div>
              <div><FontAwesomeIcon icon={faEnvelope} className="info-icon" /><span>bhudkea@gmail.com</span></div>
              <div><FontAwesomeIcon icon={faPhone} className="info-icon" /><span>+91-7249405334</span></div>
            </div>
          </Reveal>

<Reveal id="skills" className="skills-section" delay={160}>
            <div className="skills-view-toggle">
              <h3>Engineering competencies</h3>
              <div className="view-toggle-btns">
                <button
                  className={`view-toggle-btn ${skillsView === 'bars' ? 'active' : ''}`}
                  onClick={() => setSkillsView('bars')}
                  title="Chart view"
                >
                  <FontAwesomeIcon icon={faChartBar} />
                </button>
                <button
                  className={`view-toggle-btn ${skillsView === 'terminal' ? 'active' : ''}`}
                  onClick={() => setSkillsView('terminal')}
                  title="Terminal view"
                >
                  <FontAwesomeIcon icon={faTerminal} />
                </button>
              </div>
            </div>

            {skillsView === 'bars' ? (
              <div ref={skillsRef} className={skillsVisible ? 'skills-animate' : ''}>
                {skills.map((skill, i) => (
                  <div key={skill.name} className="skill-item" style={{ '--skill-i': i }}>
                    <div className="skill-label">
                      <span>{skill.name}</span><span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ '--skill-level': `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Terminal />
            )}
          </Reveal>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section id="resume" className="resume-section section">
        <Reveal className="section-header">
          <h2>My <span className="accent">Resume</span></h2>
          <div className="underline" />
          <div className="tab-buttons">
            <button className={`tab-btn ${resumeTab === 'experience' ? 'active' : ''}`} onClick={() => setResumeTab('experience')}>Professional Experience</button>
            <button className={`tab-btn ${resumeTab === 'education' ? 'active' : ''}`} onClick={() => setResumeTab('education')}>Education History</button>
          </div>
        </Reveal>

        <div className="timeline-container">
          {resumeTab === 'experience' ? (
            <div className="timeline">
              {experiences.map((exp, i) => (
                <Reveal key={exp.id} className="timeline-item" delay={i * 100}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3>{exp.role}</h3>
                        <h4 className="company">{exp.company} <span className="loc">| {exp.location}</span></h4>
                      </div>
                      <span className="duration">{exp.duration}</span>
                    </div>
                    <p className="exp-desc">{exp.description}</p>
                    <div className="timeline-skills">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="timeline">
              {educationHistory.map((edu, i) => (
                <Reveal key={edu.id} className="timeline-item" delay={i * 100}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div>
                        <h3>{edu.degree}</h3>
                        <h4 className="company">{edu.institution}</h4>
                      </div>
                      <div className="timeline-meta">
                        <span className="duration">{edu.duration}</span>
                        <span className="duration grade-badge">{edu.grade}</span>
                      </div>
                    </div>
                    <p className="exp-desc">{edu.details}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="services section">
        <Reveal className="section-header">
          <h2>Engineering <span className="accent">focus areas</span></h2>
          <div className="underline" />
        </Reveal>
        <div className="services-grid">
          {[
            { icon: faLaptopCode, title: 'Software Engineer / Developer', desc: 'Building reliable software and full-stack applications with Python, FastAPI, React, and REST APIs.', link: 'https://github.com/AniketBhudke/mitadt-mess-api', label: 'Explore software project' },
            { icon: faDatabase, title: 'SQL Developer', desc: 'Designing and querying relational databases with SQL and PostgreSQL to keep application data accurate and accessible.', link: 'https://github.com/AniketBhudke/Database-Project', label: 'Explore database project' },
            { icon: faChartBar, title: 'Data Analyst', desc: 'Using Python, Pandas, NumPy, and dashboards to uncover trends and turn raw data into actionable insights.', link: 'https://github.com/AniketBhudke/uber-fleet-dashboard', label: 'Explore analytics project' },
          ].map((s, i) => (
            <Reveal key={s.title} className="service-card" delay={i * 90}>
              <div className="service-icon"><FontAwesomeIcon icon={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href={s.link} target="_blank" rel="noreferrer" className="service-link">{s.label} →</a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="projects-section section">
        <Reveal className="section-header">
          <h2>Selected <span className="accent">projects</span></h2>
          <div className="underline" />
          <div className="tab-buttons">
            {[
              { key: 'all', label: `All (${projects.length})` },
              { key: 'analytics', label: `Data Analytics & ML (${projects.filter(p => p.category === 'analytics').length})` },
              { key: 'backend', label: `Backend & REST APIs (${projects.filter(p => p.category === 'backend').length})` },
              { key: 'research', label: `Research & AI (${projects.filter(p => p.category === 'research').length})` },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn ${projectFilter === tab.key ? 'active' : ''}`}
                onClick={() => setProjectFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="projects-grid">
          {projects
            .filter((p) => projectFilter === 'all' || p.category === projectFilter)
            .map((project, i) => (
              <Reveal key={project.id} className="project-card" delay={i * 80}>
                <div className="project-img-wrap">
                  <img src={project.imgSrc} alt={project.title} loading="lazy" decoding="async" />
                  <div className="project-overlay">
                    <div className="project-overlay-actions">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="overlay-btn overlay-btn-primary">View live project</a>
                    ) : (
                      <Link to={`/projects/${project.slug}`} className="overlay-btn overlay-btn-primary">View project</Link>
                    )}
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="overlay-btn overlay-btn-secondary" onClick={(e) => e.stopPropagation()}>GitHub</a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <Link to={`/projects/${project.slug}`} className="project-title-link">
                    <h3>{project.title}</h3>
                  </Link>
                  {project.subtitle ? <p className="project-tagline">{project.subtitle}</p> : null}
                  {project.impactMetrics?.length ? (
                    <div className="project-impact-metrics">
                      {project.impactMetrics.slice(0, 3).map((metric, idx) => (
                        <span key={idx} className="impact-pill">{metric}</span>
                      ))}
                    </div>
                  ) : null}
                  {(project.status || project.mentor) ? (
                    <div className="project-meta">
                      {project.status ? <span className="project-status">{project.status}</span> : null}
                      {project.mentor ? <span className="project-mentor">Mentor: {project.mentor}</span> : null}
                    </div>
                  ) : null}
                  <p>{project.description}</p>
                  <div className="project-card-footer">
                    <div className="project-tags">
                      {project.tags.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
                      {project.tags.length > 4 && <span className="tag tag-more">+{project.tags.length - 4} more</span>}
                    </div>
                    <Link to={`/projects/${project.slug}`} className="project-view-link">View details →</Link>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section id="credentials" className="credentials-section section">
        <Reveal className="section-header">
          <h2>Credentials & <span className="accent">Awards</span></h2>
          <div className="underline" />
          <div className="tab-buttons">
            {[
              { key: 'certifications', label: `Certifications (${certificates.length})` },
              { key: 'achievements', label: `Achievements (${achievements.length})` },
              { key: 'seminars', label: 'Seminars & Workshops (1)' },
              { key: 'activities', label: 'Activities & Bio' },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn ${credentialsTab === tab.key ? 'active' : ''}`}
                onClick={() => setCredentialsTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="credentials-content">
          {/* Certifications */}
          {credentialsTab === 'certifications' && (
            <ul className="cert-grid">
              {certificates.map((c, i) => (
                <Reveal key={c.id} as="li" className="cert-card" delay={(i % 3) * 80}>
                  <div className="cert-icon" aria-hidden><FontAwesomeIcon icon={faCertificate} /></div>
                  <div className="cert-body">
                    <div className="cert-header-row">
                      <p className="cert-issuer">{c.issuer}</p>
                      {c.badge && <span className="cert-badge-pill">{c.badge}</span>}
                    </div>
                    <h3>{c.title}</h3>
                    <p className="cert-desc">{c.description}</p>
                    <a href={c.file} target="_blank" rel="noreferrer" className="cert-link">View certificate (PDF) ↗</a>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}

          {/* Achievements */}
          {credentialsTab === 'achievements' && (
            <div className="achievements-grid">
              {achievements.map((ach, i) => {
                const cardContent = (
                  <Reveal key={ach.id} className="achievement-card" delay={i * 80}>
                    {ach.photo && (
                      <img
                        className="achievement-photo"
                        src={ach.photo}
                        alt={ach.photoAlt || ach.title}
                        loading="lazy"
                      />
                    )}
                    <div className="achievement-card-content">
                      <div className="ach-icon-wrap"><FontAwesomeIcon icon={ach.icon} /></div>
                      <div className="ach-body">
                        <div className="ach-header-row">
                          <span className="ach-category">{ach.category}</span>
                          {ach.highlightBadge && <span className="ach-highlight-pill">{ach.highlightBadge}</span>}
                        </div>
                        <h3>{ach.title}</h3>
                        <p>{ach.detail}</p>
                        {ach.link && (
                          <span className="achievement-link-text">{ach.ctaLabel || 'View details'} →</span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );

                if (ach.link) {
                  return (
                    <Link key={ach.id} to={ach.link} className="achievement-card-link">
                      {cardContent}
                    </Link>
                  );
                }

                return cardContent;
              })}
            </div>
          )}
{/* hi */}
          
          {/* Seminars & Workshops */}
          {/* Seminars & Workshops */}
          {/* Seminars & Workshops */}
          {credentialsTab === 'seminars' && (
            <div className="seminars-container">
              <Link to="/stories/cyber-shiksha" className="seminar-card-link">
                <Reveal className="seminar-card" delay={100}>
                  <img className="seminar-photo" src={cyberCampaignPhoto} alt="Cyber Shiksha awareness campaign recognition" />
                  <div className="seminar-body">
                    <div className="seminar-header">
                      <div>
                        <h4>Cyber Shiksha for Cyber Suraksha Awareness Program</h4>
                        <p className="seminar-org">Quick Heal Foundation</p>
                      </div>
                      <span className="duration">16 Nov, 2023 - 20 Feb, 2025</span>
                    </div>
                    <p className="seminar-desc">
                      My two-year journey as a Cyber Warrior with the SKC team focused on helping students and institutions build safer digital habits. Across 19 institutions and 21 presentations, I reached approximately 6,900 students and grew through teamwork, leadership, public speaking, and social contribution.
                    </p>
                    <span className="seminar-story-link">Read my two-year journey →</span>
                    <div className="seminar-skills">
                      {seminarSkills.map((skill) => (
                        <span key={skill} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </Link>
            </div>
          )}

          {/* Activities & Bio */}
          {credentialsTab === 'activities' && (
            <div className="activities-personal-grid">
              <Reveal className="activities-card" delay={80}>
                <h3>Professional Activities & Achievements</h3>
                <div className="activities-list-wrap">
                  <div className="activity-group">
                    <h4>Technical & Academic Activities</h4>
                    <ul>{coCurricular.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </div>
                  <div className="activity-group">
                    <h4>Social & Leadership Activities</h4>
                    <ul>{extraCurricular.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </div>
                </div>
              </Reveal>
              <Reveal className="personal-details-card" delay={160}>
                <h3>Professional Profile</h3>
                <div className="personal-info-grid">
                  {personalInfo.map((info, i) => (
                    <div key={i} className="info-item">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section section">
        <Reveal className="section-header">
          <h2>Get in <span className="accent">touch</span></h2>
          <div className="underline" />
        </Reveal>
        <div className="contact-wrapper">
          <Reveal className="contact-info" delay={80}>
            <h3>Start a conversation</h3>
            <p>
              For project inquiries, collaborations, or career opportunities, please reach out using the form or the details below. I aim to respond promptly.
            </p>
            <div className="contact-status">
              <span className="contact-status-dot" aria-hidden="true" />
              Available for new opportunities
            </div>
            <div className="contact-details">
              <div><FontAwesomeIcon icon={faEnvelope} className="info-icon" /><span>bhudkea@gmail.com</span></div>
              <div><FontAwesomeIcon icon={faPhone} className="info-icon" /><span>+91-7249405334, +91-9511931411</span></div>
              <div><FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" /><span>Loni Kalbhor, Pune, India</span></div>
              <div><FontAwesomeIcon icon={faGithub} className="info-icon" /><a href="https://github.com/AniketBhudke" target="_blank" rel="noreferrer">github.com/AniketBhudke</a></div>
              <div><FontAwesomeIcon icon={faLinkedin} className="info-icon" /><a href="https://www.linkedin.com/in/aniket-bhudke-389b592b0/" target="_blank" rel="noreferrer">linkedin.com/in/aniket-bhudke-389b592b0/</a></div>
              <div><FontAwesomeIcon icon={faHackerrank} className="info-icon hackerrank-icon" /><a href="https://hackerrank.com/profile/bhudkea" target="_blank" rel="noreferrer" className="hackerrank-link">hackerrank.com/profile/bhudkea</a></div>
            </div>
          </Reveal>
          <Reveal className="contact-form" delay={160} as="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="First Name" required />
              <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" required />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows={5} required />
            <button type="submit" className="btn-primary submit-btn">Send message</button>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Aniket Bhudke. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/AniketBhudke" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/aniket-bhudke-389b592b0/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://hackerrank.com/profile/bhudkea" target="_blank" rel="noreferrer" aria-label="HackerRank" className="hackerrank"><FontAwesomeIcon icon={faHackerrank} /></a>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </div>
  );
}
