import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Aniket\'s Interactive Terminal!' },
    { type: 'output', text: 'Type "help" to see a list of available commands.' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  const commands = {
    help: 'List all available commands: [about, skills, experience, education, projects, clear]',
    about: 'Brief summary of my professional background.',
    skills: 'Display my technical skills and expertise.',
    experience: 'Details about my internship at Leadturtle Technology Services.',
    education: 'My academic history from MCA to high school.',
    projects: 'Showcase of selected projects and repositories.',
    clear: 'Clear the terminal screen.'
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (!trimmed) {
      setHistory(prev => [...prev, { type: 'input', text: '' }]);
      return;
    }

    response.push({ type: 'input', text: cmd });

    switch (trimmed) {
      case 'help':
        response.push({ type: 'output', text: 'Available commands:' });
        Object.entries(commands).forEach(([k, v]) => {
          response.push({ type: 'output', text: `  ${k.padEnd(12)} - ${v}` });
        });
        break;

      case 'about':
        response.push({ type: 'output', text: 'Aniket Bhudke — M.C.A. (Data Science) student.' });
        response.push({ type: 'output', text: 'Focused on Python, FastAPI, REST APIs, and full-stack backend architectures.' });
        response.push({ type: 'output', text: 'Location: Pune, Maharashtra, India.' });
        response.push({ type: 'output', text: 'Email: bhudkea@gmail.com | Phone: +91-7249405334' });
        break;

      case 'skills':
        response.push({ type: 'output', text: 'Core Technical Skillset:' });
        response.push({ type: 'output', text: '  Backend:  Python, FastAPI, Django, REST APIs, DBMS, SQL' });
        response.push({ type: 'output', text: '  Frontend: React, JavaScript, HTML & CSS' });
        response.push({ type: 'output', text: '  Cloud/Dev: AWS (EC2 & S3), Git & GitHub, Debugging, Version Control' });
        break;

      case 'experience':
        response.push({ type: 'output', text: 'Python Backend Intern — Leadturtle Technology Services (Nov 2023 - Jan 2024)' });
        response.push({ type: 'output', text: '  • Completed 150 hours of intensive backend engineering.' });
        response.push({ type: 'output', text: '  • Designed APIs using FastAPI and integrated PostgreSQL databases.' });
        response.push({ type: 'output', text: '  • Configured AWS EC2 and S3 cloud buckets.' });
        response.push({ type: 'output', text: '' });
        response.push({ type: 'output', text: 'Tech Analyst Intern — Way.CZ International' });
        response.push({ type: 'output', text: '  • Technology analysis, data handling, and business-oriented technical tasks.' });
        response.push({ type: 'output', text: '  • Research, data analysis & visualization using Python and SQL.' });
        response.push({ type: 'output', text: '  • Structured problem-solving in a practical technology environment.' });
        break;

      case 'education':
        response.push({ type: 'output', text: 'Education History:' });
        response.push({ type: 'output', text: '  1. MIT College of Management Pune (MCA Data Science) — 2025 - 2027 | CGPA: 7.73' });
        response.push({ type: 'output', text: '  2. Shankarlal Khandelwal College Akola (BCA) — 2022 - 2025 | CGPA: 7.77' });
        response.push({ type: 'output', text: '  3. CS Diploma (2022) | CGPA: 7.77' });
        break;

      case 'projects':
        response.push({ type: 'output', text: 'Featured Projects:' });
        response.push({ type: 'output', text: '  • E-Commerce Sales & Churn Analytics (Python, SQL, ML, Power BI) - End-to-end analytics & RFM churn ML.' });
        response.push({ type: 'output', text: '  • Employee Analytics & Attrition ML (Python, SQL, Scikit-Learn, Power BI) - HR workforce attrition prediction.' });
        response.push({ type: 'output', text: '  • MIT ADT Mess Hub (FastAPI, React) - Centralized campus mess operations.' });
        response.push({ type: 'output', text: '  • Event Decoration Booking (FastAPI) - Interactive service reservation system.' });
        response.push({ type: 'output', text: '  • Mentora (React, Node.js, NLP) - Personalized career and educational advisor built for Smart India Hackathon 2025.' });
        response.push({ type: 'output', text: '  • AI Traffic Control Framework - Smart city IoT & surveillance research paper (1st Prize).' });
        break;

      default:
        response.push({ type: 'output', text: `Command not found: "${trimmed}". Type "help" for a list of commands.` });
    }

    setHistory(prev => [...prev, ...response]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">guest@aniket-bhudke:~</span>
      </div>
      <div className="terminal-body" onClick={() => document.getElementById('terminal-input').focus()}>
        {history.map((line, i) => (
          <div key={i} className={`terminal-line ${line.type}`}>
            {line.type === 'input' && <span className="prompt">aniket$ </span>}
            <span>{line.text}</span>
          </div>
        ))}
        <div className="terminal-input-row">
          <span className="prompt">aniket$ </span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default Terminal;
