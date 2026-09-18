import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExpand, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CyberShikshaStory.css';

import cyberPhoto1 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.10.33 PM.jpeg';
import cyberPhoto2 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.11.24 PM (1).jpeg';
import cyberPhoto3 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.11.25 PM.jpeg';
import cyberPhoto4 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.14.49 PM.jpeg';
import cyberPhoto5 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.15.18 PM (1).jpeg';
import cyberPhoto6 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.15.18 PM.jpeg';
import cyberPhoto7 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.15.19 PM (1).jpeg';
import cyberPhoto8 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.16.04 PM (1).jpeg';
import cyberPhoto9 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.16.04 PM (2).jpeg';
import cyberPhoto10 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-15 at 6.16.04 PM.jpeg';
import cyberPhoto11 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-19 at 11.04.30 PM.jpeg';
import cyberPhoto12 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-22 at 10.06.42 PM.jpeg';
import cyberAwardPhoto from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-22 at 10.14.53 PM.jpeg';
import cyberPhoto14 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-22 at 9.56.16 PM.jpeg';
import cyberPhoto15 from '../assets/cyber shiksha for cyber suraksha/WhatsApp Image 2026-08-22 at 9.56.53 PM.jpeg';

const gallery = [
  [cyberAwardPhoto, 'National-level Cyber Shiksha award ceremony'],
  [cyberPhoto1, 'Cyber awareness campaign activity'],
  [cyberPhoto2, 'Awareness presentation'],
  [cyberPhoto3, 'Student engagement session'],
  [cyberPhoto4, 'Cyber safety education'],
  [cyberPhoto5, 'SKC team activity'],
  [cyberPhoto6, 'Community awareness work'],
  [cyberPhoto7, 'Cyber Shiksha campaign moment'],
  [cyberPhoto8, 'Awareness outreach'],
  [cyberPhoto9, 'Learning and discussion session'],
  [cyberPhoto10, 'Campaign recognition'],
  [cyberPhoto11, 'Cyber Warrior journey'],
  [cyberPhoto12, 'National-level recognition'],
  [cyberPhoto14, 'Cyber Suraksha activity'],
  [cyberPhoto15, 'Two-year campaign memory'],
];

export default function CyberShikshaStory() {
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
          <p className="cyber-story-eyebrow">Cyber Shiksha for Cyber Suraksha · Quick Heal Foundation</p>
          <h1>My Two-Year Journey with the Cyber Shiksha for Cyber Suraksha Campaign</h1>
          <p className="cyber-story-intro">
            My two-year journey as a <strong>Cyber Warrior with the SKC team</strong>, supported by the Quick Heal Foundation, has been a valuable experience in cybersecurity awareness, leadership, and social impact.
          </p>
          <div className="cyber-story-stats">
            <span><strong>21</strong> presentations</span>
            <span><strong>19</strong> institutions</span>
            <span><strong>6,900</strong> students reached</span>
          </div>
        </div>
        <div className="cyber-story-hero-image">
          <img src={cyberAwardPhoto} alt="Cyber Shiksha award ceremony" />
        </div>
      </section>

      <article className="cyber-story-content">
        <section className="cyber-story-year">
          <span className="cyber-story-year-label">01</span>
          <div>
            <h2>Awareness, learning, and social contribution</h2>
            <p>
              My two-year journey with the <strong>Cyber Shiksha for Cyber Suraksha campaign</strong>, supported by the Quick Heal Foundation, has been an incredible experience filled with learning, teamwork, leadership, and social contribution. I worked as a <strong>Cyber Warrior with the SKC team</strong>, spreading awareness about cybersecurity and safe digital practices among students and educational institutions.
            </p>
            <p>
              In <strong>2024</strong>, I delivered presentations across <strong>19 institutions</strong>, completing <strong>21 presentation entries</strong> and reaching approximately <strong>6,900 students</strong>. I discussed cyber threats, online fraud, strong passwords, social media privacy, personal data protection, and responsible internet usage in simple, practical language. This work strengthened my public speaking, communication, teamwork, and leadership skills, and was recognized at the <strong>division level</strong>.
            </p>
          </div>
        </section>

        <section className="cyber-story-year">
          <span className="cyber-story-year-label">02</span>
          <div>
            <h2>Achievement and Growth</h2>
            <p>
              In <strong>2025</strong>, I continued the campaign with greater confidence in presenting, interacting with audiences, and sharing cybersecurity knowledge. My efforts were recognized through the <strong>Best Warrior award at the national level</strong>, and I had the honour of receiving it from <strong>C. P. Radhakrishnan</strong>. This memorable moment motivated me to continue contributing to cybersecurity awareness and digital safety.
            </p>
            <p>
              Throughout these two years, I learned that cybersecurity is not limited to technical knowledge. It also requires awareness, responsible behaviour, and continuous education. Every presentation improved my confidence, communication, leadership, and problem-solving abilities.
            </p>
          </div>
        </section>

        <section className="cyber-story-closing">
          I am grateful to the Quick Heal Foundation, the SKC team, and everyone who supported me throughout this journey. My experience as a Cyber Warrior has become an important part of my personal and professional growth, strengthening my belief that <strong>cybersecurity begins with awareness</strong>.
        </section>

        <section className="cyber-story-gallery-section">
          <div className="cyber-story-section-heading">
            <p>Memories from the campaign</p>
            <h2>Awareness in action</h2>
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
