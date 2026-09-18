import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExpand, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CyberShikshaStory.css';

import nationalPhoto1 from '../assets/national level/WhatsApp Image 2026-08-19 at 11.04.30 PM.jpeg';
import nationalPhoto2 from '../assets/national level/WhatsApp Image 2026-08-22 at 10.14.53 PM.jpeg';
import nationalPhoto3 from '../assets/national level/WhatsApp Image 2026-08-22 at 9.47.31 PM.jpeg';
import nationalPhoto4 from '../assets/national level/WhatsApp Image 2026-08-22 at 9.47.58 PM.jpeg';
import nationalPhoto5 from '../assets/national level/WhatsApp Image 2026-08-22 at 9.56.16 PM.jpeg';
import nationalPhoto6 from '../assets/national level/WhatsApp Image 2026-08-22 at 9.56.53 PM.jpeg';

const gallery = [
  [nationalPhoto2, 'Cyber Shiksha for Cyber Suraksha Awards 2025'],
  [nationalPhoto1, 'Cyber Warrior recognition moment'],
  [nationalPhoto3, 'Best Cyber Warrior Team recognition'],
  [nationalPhoto4, 'Highest Offline Outreach recognition'],
  [nationalPhoto5, 'Cyber Warrior team memory'],
  [nationalPhoto6, 'Awards ceremony in Pune'],
];

const videos = [
  ['/national-level/WhatsApp Video 2026-08-22 at 10.26.00 PM.mp4', 'Awards ceremony highlight'],
  ['/national-level/WhatsApp Video 2026-08-22 at 10.26.33 PM.mp4', 'Cyber Warrior recognition moment'],
];

export default function NationalRecognitionStory() {
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
          <h1>Cyber Shiksha for Cyber Suraksha | My 2025 Journey</h1>
          <p className="cyber-story-intro">
            2025 was a year of learning, teamwork, recognition, and impact. Continuing my journey as a Cyber Warrior gave me the opportunity to contribute to cybersecurity awareness and reach students through offline outreach.
          </p>
          <div className="cyber-story-stats">
            <span><strong>Winner</strong> Best Cyber Warrior Team</span>
            <span><strong>Runner Up</strong> Highest Offline Outreach</span>
            <span><strong>2025</strong> Pune Awards</span>
          </div>
        </div>
        <div className="cyber-story-hero-image">
          <img src={nationalPhoto2} alt="Cyber Shiksha for Cyber Suraksha Awards 2025" />
        </div>
      </section>

      <article className="cyber-story-content">
        <section className="cyber-story-year">
          <span className="cyber-story-year-label">01</span>
          <div>
            <h2>A year of awareness and impact</h2>
            <ul>
              <li>Continued my journey as a Cyber Warrior with Cyber Shiksha for Cyber Suraksha, an initiative by the Quick Heal Foundation.</li>
              <li>Contributed to cybersecurity awareness through classroom sessions, community awareness, and offline outreach.</li>
              <li>Learned that cybersecurity is not only about technology. It is also about awareness, responsibility, and protecting people.</li>
            </ul>
          </div>
        </section>

        <section className="cyber-story-year">
          <span className="cyber-story-year-label">02</span>
          <div>
            <h2>A proud achievement</h2>
            <ul>
              <li>Received the <strong>Best Cyber Warrior Team award as Winner</strong> at the Cyber Shiksha for Cyber Suraksha Awards 2025 in Pune.</li>
              <li>Earned <strong>Highest Offline Outreach as Runner Up</strong> among Cyber Warriors from across Maharashtra.</li>
              <li>Had the honour of receiving recognition from <strong>Hon. C. P. Radhakrishnan, Governor of Maharashtra</strong>.</li>
            </ul>
          </div>
        </section>

        <section className="cyber-story-year">
          <span className="cyber-story-year-label">03</span>
          <div>
            <h2>Teamwork behind the achievement</h2>
            <ul>
              <li>This recognition was the result of teamwork, dedication, coordination, and support rather than an individual effort.</li>
              <li>Special thanks to teammate <strong>Sumit Sapkal</strong> for his dedication and effort throughout the Cyber Warrior journey.</li>
              <li>Grateful to <strong>Prof. Haridas Kharat Sir</strong>, Anupama Katkar Ma’am, and the entire Quick Heal Foundation team for their guidance and support.</li>
              <li>Together, we proudly represented <strong>Shankarlal Khandelwal College, Akola</strong>.</li>
            </ul>
          </div>
        </section>

        <section className="cyber-story-closing">
          This journey strengthened my leadership, communication, public speaking, teamwork, community outreach, and cybersecurity awareness. Being a Cyber Warrior has been more than an achievement: it has been an opportunity to learn, lead, and contribute to a safer digital India.
        </section>

        <section className="cyber-story-gallery-section">
          <div className="cyber-story-section-heading">
            <p>Recognition and memories</p>
            <h2>Cyber Warrior journey in action</h2>
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

        <section className="cyber-story-gallery-section">
          <div className="cyber-story-section-heading">
            <p>Video memories</p>
            <h2>Moments from the awards</h2>
          </div>
          <div className="cyber-story-gallery">
            {videos.map(([src, caption]) => (
              <figure key={caption}>
                <video controls preload="metadata" src={src} aria-label={caption} />
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
