import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import profilePic from '../assets/profile.png';
import Terminal from '../components/Terminal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import {
  faCode, faDatabase, faServer, faEnvelope, faPhone, faMapMarkerAlt,
  faGraduationCap, faCertificate, faTrophy, faShieldHalved, faLaptopCode,
  faAward, faTerminal, faChartBar, faDownload, faCloud, faBolt
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
    highlightBadge: '🏆 1st Prize Winner',
    stats: '8th Int. Symposium'
  },
  { 
    id: 2, 
    title: 'MIT ADT Hackathon – Top 20 Finalist', 
    category: 'Hackathon', 
    detail: 'Achieved Top 20 Finalist position in the MIT ADT Hackathon among 1,200+ competing teams with the project "Mentora".', 
    icon: faTrophy,
    highlightBadge: '🚀 Top 20 / 1,200+ Teams',
    stats: '1,200+ Teams'
  },
  { 
    id: 3, 
    title: 'Cyber Shiksha for Cyber Suraksha – 2-Year Award', 
    category: 'Cyber Security', 
    detail: 'Recognized as a 2-Year Award Holder in the Quick Heal Foundation campaign for active participation and contribution to cyber security awareness.', 
    icon: faShieldHalved,
    photo: '/cyber-shiksha-award.jpg',
    highlightBadge: '🛡️ 2-Year Award Holder',
    stats: 'Quick Heal Foundation'
  },
  { 
    id: 4, 
    title: 'National Level Recognition', 
    category: 'Cyber Security', 
    detail: 'National level recognition for active contribution towards cyber security awareness programs.', 
    icon: faShieldHalved,
    highlightBadge: '🇮🇳 National Level',
    stats: 'National Awareness'
  },
  { 
    id: 5, 
    title: 'Competitive Programming Practitioner', 
    category: 'Problem Solving', 
    detail: 'Active solver and coder on competitive programming platforms including LeetCode, HackerRank, and GeeksforGeeks.', 
    icon: faLaptopCode,
    highlightBadge: '⭐ Multi-Platform Coder',
    stats: 'LeetCode & HackerRank'
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
  'Participated in Hackathons and Technical Symposiums',
  'Research Paper Presentation on AI-Based Traffic Management System',
  'Active Participation in Cyber Security Awareness Programs',
  'Competitive Programming practice on LeetCode, HackerRank, and GeeksforGeeks',
  'Technical Seminar and Workshop Participation',
];

const extraCurricular = [
  'Public Speaking and Technical Presentations',
  'Team Collaboration in Academic Projects',
  'Social Awareness Activities in Schools and Urban Areas',
  'Event Participation and Coordination',
  'Self-Learning of Emerging Technologies and AI Tools',
];

const personalInfo = [
  { label: 'Date of Birth', value: '20 May, 2004' },
  { label: 'Gender & Status', value: 'Male · Single' },
  { label: 'Current Address', value: 'Loni Kalbhor, Pune, Maharashtra, India' },
  { label: 'Permanent Address', value: 'Maratha Nagar, Bhavani Mandhir Road, Akola, Maharashtra, India - 444103' },
  { label: 'Interests & Hobbies', value: 'Coding & Web Development, Exploring AI & Smart Technologies, Competitive Programming, Research & Innovation, Cyber Security Awareness' },
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
        <div className="nav-brand" onClick={() => scrollTo('home')}>
          <span className="brand-dot" />&nbsp;Aniket<span className="accent">.</span>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'resume', 'services', 'projects', 'credentials', 'contact'].map((s) => (
            <li key={s}>
              <button onClick={() => scrollTo(s)}>
                {s === 'credentials' ? 'Credentials' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
        </div>
        <div className="hero-text">
          <p className="greeting">HELLO, I'M</p>
          <h1>Aniket <span className="accent">Bhudke</span></h1>
          <h2 className="role">M.C.A. – Data Science <span className="accent">(Python Backend & Full-Stack)</span></h2>
          <p className="hero-edu">MIT College of Management Pune · 2025 - 2027</p>
          <p className="hero-desc">
            Motivated and detail-oriented M.C.A. (Data Science) student skilled in Python, FastAPI, REST API design, and data analytics. I build scalable backend services and full-stack applications, and have hands-on experience with cloud deployments (AWS EC2 & S3) and relational databases.
          </p>
          <div className="hero-actions">
            <a href="/Aniket_Bhudke_Resume.pdf" target="_blank" rel="noreferrer" className="btn-primary"><FontAwesomeIcon icon={faDownload} />&nbsp;View Resume</a>
            <button type="button" className="btn-outline" onClick={() => scrollTo('contact')}><FontAwesomeIcon icon={faEnvelope} />&nbsp;Contact Me</button>
          </div>
          <div className="social-row">
            <a href="https://github.com/AniketBhudke" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/aniket-bhudke-389b592b0/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://hackerrank.com/profile/bhudkea" target="_blank" rel="noreferrer" aria-label="HackerRank" className="hackerrank"><FontAwesomeIcon icon={faHackerrank} /></a>
            <a href="mailto:bhudkea@gmail.com" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-ring">
            <svg className="avatar-svg" viewBox="0 0 360 360" role="img" aria-label="Aniket Bhudke avatar">
              <defs>
                <clipPath id="avatarClip">
                  <circle cx="180" cy="180" r="120" />
                </clipPath>
                <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="60%" stopColor="#39e88b" />
                </linearGradient>
                <linearGradient id="g2" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#00b9ff" />
                  <stop offset="100%" stopColor="#7b5ea7" />
                </linearGradient>
                <linearGradient id="g3" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#6fe6ff" />
                  <stop offset="100%" stopColor="#5a8cff" />
                </linearGradient>
                <linearGradient id="g4" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#cfefff" />
                  <stop offset="100%" stopColor="#9bd1ff" />
                </linearGradient>
              </defs>

              <g className="rings">
                <circle className="ring ring-outer" cx="180" cy="180" r="156" stroke="url(#g1)" />
                <circle className="ring ring-3" cx="180" cy="180" r="146" stroke="url(#g2)" />
                <circle className="ring ring-2" cx="180" cy="180" r="136" stroke="url(#g3)" />
                <circle className="ring ring-inner" cx="180" cy="180" r="126" stroke="url(#g4)" />
              </g>

              {/* small static glow dot */}
              <circle className="ring-dot" cx="180" cy="60" r="6" />

              {/* user image clipped to circle */}
              <image href={profilePic} x="60" y="60" width="240" height="240" clipPath="url(#avatarClip)" preserveAspectRatio="xMidYMid slice" />
            </svg>
          </div>
        </div>

        {/* Hero stats/cards */}
        <div className="hero-stats" aria-hidden="false">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
              <div className="stat-body">
                <div className="stat-title">M.C.A.</div>
                <div className="stat-sub">Data Science · 2025 - 2027</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faCode} /></div>
              <div className="stat-body">
                <div className="stat-title">10+</div>
                <div className="stat-sub">Projects Completed</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faCloud} /></div>
              <div className="stat-body">
                <div className="stat-title">AWS</div>
                <div className="stat-sub">EC2, S3 & Cloud Basics</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faDatabase} /></div>
              <div className="stat-body">
                <div className="stat-title">SQL</div>
                <div className="stat-sub">Database Design & Optimization</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faChartBar} /></div>
              <div className="stat-body">
                <div className="stat-title">Data</div>
                <div className="stat-sub">Analysis & Visualization</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faBolt} /></div>
              <div className="stat-body">
                <div className="stat-title">FastAPI</div>
                <div className="stat-sub">REST API Development</div>
              </div>
            </div>
          </div>
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
              My hands-on experience spans developing RESTful APIs, cloud deployment (AWS EC2, S3), database management (PostgreSQL, SQLite), and integrating AI-based solutions. I have refined these skills through a backend development internship at <span className="accent">Leadturtle Technology Services</span> and key academic projects including the MIT ADT Mess Hub, Restaurant Management System, and Event Decoration Booking platform.
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

<Reveal className="skills-section" delay={160}>
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
            { icon: faCode, title: 'Frontend engineering', desc: 'Building accessible, responsive interfaces with React and modern JavaScript focused on usability and performance.', link: 'https://github.com/AniketBhudke/Fronted-project', label: 'View work on GitHub' },
            { icon: faServer, title: 'Backend engineering', desc: 'Designing secure REST APIs, authentication flows, and modular backend services using Django and FastAPI.', link: 'https://github.com/AniketBhudke/Backend-Project', label: 'View work on GitHub' },
            { icon: faDatabase, title: 'Data and analytics', desc: 'Applying SQL, NumPy, Pandas, and visualization workflows to convert raw data into actionable insights.', link: 'https://github.com/AniketBhudke/Database-Project', label: 'View work on GitHub' },
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
                      <Link to={`/projects/${project.slug}`} className="overlay-btn overlay-btn-primary">View project</Link>
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
              {achievements.map((ach, i) => (
                <Reveal key={ach.id} className="achievement-card" delay={i * 80}>
                  {ach.photo && (
                    <img
                      className="achievement-photo"
                      src={ach.photo}
                      alt="Aniket Bhudke receiving the Cyber Shiksha award"
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
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
{/* hi */}
          {/* Seminars & Workshops */}
          {credentialsTab === 'seminars' && (
            <div className="seminars-container">
              <Reveal className="seminar-card" delay={100}>
                <div className="seminar-icon"><FontAwesomeIcon icon={faShieldHalved} /></div>
                <div className="seminar-body">
                  <div className="seminar-header">
                    <div>
                      <h4>Cyber Shiksha for Cyber Suraksha Awareness Program</h4>
                      <p className="seminar-org">Quick Heal Foundation</p>
                    </div>
                    <span className="duration">16 Nov, 2023 - 20 Feb, 2025</span>
                  </div>
                  <p className="seminar-desc">
                    Participated in the "Cyber Shiksha for Cyber Suraksha" campaign organized by the Quick Heal Foundation during graduation. The program focused on spreading cyber security awareness in urban areas and schools through awareness sessions and educational activities. Actively contributed to educating students about online safety, cyber threats, digital privacy, and responsible internet usage. Recognized as a 2-year award holder for active participation and contribution to the campaign.
                  </p>
                  <div className="seminar-skills">
                    {seminarSkills.map((skill) => (
                      <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* Activities & Bio */}
          {credentialsTab === 'activities' && (
            <div className="activities-personal-grid">
              <Reveal className="activities-card" delay={80}>
                <h3>Co-Curricular & Extra-Curricular</h3>
                <div className="activities-list-wrap">
                  <div className="activity-group">
                    <h4>Co-Curricular</h4>
                    <ul>{coCurricular.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </div>
                  <div className="activity-group">
                    <h4>Extra-Curricular</h4>
                    <ul>{extraCurricular.map((item, i) => <li key={i}>{item}</li>)}</ul>
                  </div>
                </div>
              </Reveal>
              <Reveal className="personal-details-card" delay={160}>
                <h3>Personal Information</h3>
                <div className="personal-info-grid">
                  {personalInfo.map((info, i) => (
                    <div key={i} className="info-item">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
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
