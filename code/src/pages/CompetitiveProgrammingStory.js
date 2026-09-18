import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCode, faLightbulb, faRoute, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CyberShikshaStory.css';

const practiceTracks = [
  {
    number: '01',
    icon: faCode,
    title: 'Python Programming',
    text: 'Strengthening programming fundamentals and writing clear, efficient solutions that are ready to grow.'
  },
  {
    number: '02',
    icon: faRoute,
    title: 'Data Structures',
    text: 'Practicing arrays, strings, lists, stacks, queues, and the core structures behind dependable software.'
  },
  {
    number: '03',
    icon: faLightbulb,
    title: 'Algorithms',
    text: 'Improving through searching, sorting, and logical challenges that make each solution more deliberate.'
  },
  {
    number: '04',
    icon: faSeedling,
    title: 'Continuous Learning',
    text: 'Breaking complex problems into manageable steps, studying mistakes, and improving the next approach.'
  }
];

export default function CompetitiveProgrammingStory() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="cyber-story-page competitive-story-page">
      <header className="cyber-story-nav">
        <button type="button" onClick={() => navigate('/#credentials')}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to credentials
        </button>
      </header>

      <section className="cyber-story-hero">
        <div className="cyber-story-hero-copy">
          <p className="cyber-story-eyebrow">Problem Solving · LeetCode · HackerRank · GeeksforGeeks</p>
          <h1>Competitive Programming Journey</h1>
          <p className="cyber-story-intro">
            My coding journey is built around one steady loop: <strong>practice, solve, learn, improve</strong>. Each problem helps me sharpen logical thinking, algorithmic efficiency, and the confidence to take on harder challenges.
          </p>
          <div className="cyber-story-stats">
            <span><strong>Python</strong> daily foundation</span>
            <span><strong>DSA</strong> structured thinking</span>
            <span><strong>3</strong> practice platforms</span>
          </div>
        </div>
        <div className="competitive-story-orbit" aria-hidden="true">
          <span className="competitive-story-orbit-line" />
          <span className="competitive-story-orbit-core"><FontAwesomeIcon icon={faCode} /></span>
          <span className="competitive-story-orbit-label">solve()</span>
        </div>
      </section>

      <article className="cyber-story-content">
        <section className="cyber-story-year">
          <span className="cyber-story-year-label">01</span>
          <div>
            <h2>My coding and problem-solving journey</h2>
            <p>
              I regularly practice problems on LeetCode, HackerRank, and GeeksforGeeks to build strong problem-solving skills, logical thinking, and algorithmic efficiency. The goal is not just to reach an answer, but to understand why a solution works and how to make it better.
            </p>
          </div>
        </section>

        <section className="competitive-practice-grid" aria-label="What I practice">
          {practiceTracks.map((track) => (
            <article className="competitive-practice-card" key={track.number}>
              <span className="competitive-practice-number">{track.number}</span>
              <div className="competitive-practice-icon"><FontAwesomeIcon icon={track.icon} /></div>
              <h3>{track.title}</h3>
              <p>{track.text}</p>
            </article>
          ))}
        </section>

        <section className="cyber-story-year">
          <span className="cyber-story-year-label">02</span>
          <div>
            <h2>The learning loop</h2>
            <ul>
              <li>Break a complex problem into smaller, manageable steps.</li>
              <li>Compare approaches and choose the clearest efficient solution.</li>
              <li>Analyze mistakes so every failed attempt becomes useful feedback.</li>
              <li>Return to the next challenge with stronger logic and better confidence.</li>
            </ul>
          </div>
        </section>

        <section className="cyber-story-closing">
          My goal is to become a proficient software developer with strong algorithmic thinking and practical programming skills. Consistent practice is the foundation: <strong>Practice. Solve. Learn. Improve.</strong>
        </section>
      </article>
    </main>
  );
}