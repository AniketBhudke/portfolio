import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExpand, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CyberShikshaStory.css';

import researchPresentation from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.32.30 PM.jpeg';
import researchPhoto2 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.28.03 PM.jpeg';
import researchPhoto3 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.32.22 PM.jpeg';
import researchPhoto4 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.32.23 PM.jpeg';
import researchPhoto5 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.32.28 PM.jpeg';
import researchPhoto6 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.43.23 PM.jpeg';
import researchPhoto7 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.43.24 PM.jpeg';
import researchPhoto8 from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.43.25 PM (1).jpeg';
import researchAward from '../assets/Research paper compitition/WhatsApp Image 2026-09-18 at 8.43.25 PM.jpeg';

const gallery = [
  [researchPhoto2, 'Research symposium preparation'],
  [researchPhoto3, 'Research paper presentation in progress'],
  [researchPhoto4, 'Sharing the intelligent traffic management framework'],
  [researchPhoto5, 'Presenting the Pune traffic case study'],
  [researchPresentation, 'Research paper presentation at the 8th International Symposium'],
  [researchPhoto6, 'The award ceremony begins'],
  [researchPhoto7, 'Celebrating the research team'],
  [researchPhoto8, 'Recognition after the presentation'],
  [researchAward, 'Award ceremony and paper recognition'],
];

export default function ResearchAwardStory() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <main className="cyber-story-page">
      <header className="cyber-story-nav">
        <button type="button" onClick={() => navigate('/#credentials')}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to credentials
        </button>
      </header>

      <section className="cyber-story-hero">
        <div className="cyber-story-hero-copy">
          <p className="cyber-story-eyebrow">Research & Innovation · 8th International Symposium</p>
          <h1>1st Prize in Best Paper Presentation</h1>
          <p className="cyber-story-intro">
            Our research paper, <strong>An Empirical Study of Urban Traffic Congestion Causes Using Traffic Police Survey Data: A Case Study of Pune</strong>, explored practical ways to understand and improve traffic management in Pune City.
          </p>
          <div className="cyber-story-stats">
            <span><strong>1st</strong> prize paper</span>
            <span><strong>AI</strong> and IoT framework</span>
            <span><strong>Pune</strong> case study</span>
          </div>
        </div>
        <div className="cyber-story-hero-image">
          <img src={researchPresentation} alt="AI-based traffic management research paper presentation" />
        </div>
      </section>

      <article className="cyber-story-content">
        <section className="cyber-story-year">
          <span className="cyber-story-year-label">01</span>
          <div>
            <h2>Understanding the traffic challenge</h2>
            <ul>
              <li>Studied the causes of urban traffic congestion through field research, traffic observations, and surveys with traffic police officers.</li>
              <li>Focused on recurring issues including rule violations, wrong-side driving, poor road conditions, and potholes.</li>
              <li>Used Pune City as a practical case study to connect real-world observations with a scalable smart-city response.</li>
            </ul>
          </div>
        </section>

        <section className="cyber-story-year">
          <span className="cyber-story-year-label">02</span>
          <div>
            <h2>Designing an intelligent framework</h2>
            <ul>
              <li>Proposed an Intelligent Traffic Management Framework combining Artificial Intelligence and the Internet of Things.</li>
              <li>Included drone surveillance and real-time monitoring to support faster detection of congestion and unsafe road conditions.</li>
              <li>Connected data collection, analysis, and decision-making into a more responsive traffic-control model.</li>
            </ul>
          </div>
        </section>

        <section className="cyber-story-closing">
          Presenting this work strengthened my interest in research, smart-city technology, and solutions that turn public data into meaningful improvements for everyday life. The paper received the <strong>1st Prize</strong> at the 8th International Symposium on Innovation in Global Technology.
        </section>

        <section className="cyber-story-gallery-section">
          <div className="cyber-story-section-heading">
            <p>Research presentation and recognition</p>
            <h2>Award-winning research in action</h2>
          </div>
          <div className="cyber-story-gallery">
            {gallery.map(([src, caption]) => (
              <figure key={caption}>
                <button type="button" onClick={() => setLightbox({ src, caption })} aria-label={`Open ${caption}`}>
                  <img src={src} alt={caption} loading="lazy" />
                  <span><FontAwesomeIcon icon={faExpand} /></span>
                </button>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </article>

      {lightbox && (
        <div className="cyber-story-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" onClick={() => setLightbox(null)} aria-label="Close image preview">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
