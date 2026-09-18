import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faBuilding,
  faChartLine,
  faExpand,
  faServer,
  faUserLock,
  faUtensils,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getProjectBySlug } from '../data/projects';
import Reveal from '../components/Reveal';
import './ProjectDetail.css';

const FLOW_ICONS = [faBuilding, faUserLock, faUtensils, faChartLine];

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  const [navScrolled, setNavScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  if (!project) {
    return (
      <div className="pd-page">
        <div className="pd-inner">
          <h1>Project not found</h1>
          <button type="button" className="btn-primary" onClick={() => navigate('/#projects')}>
            Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  const flowCount = project.screenshotSections?.length ?? 0;
  const screenshotCount = project.screenshotSections?.reduce((n, s) => n + s.images.length, 0) ?? 0;

  return (
    <div className="pd-page">
      <div className="pd-bg" aria-hidden="true">
        <span className="pd-orb pd-orb-1" />
        <span className="pd-orb pd-orb-2" />
        <span className="pd-grid" />
      </div>

      <header className={`pd-nav ${navScrolled ? 'pd-nav-scrolled' : ''}`}>
        <button type="button" className="pd-back" onClick={() => navigate('/#projects')}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to projects</span>
        </button>
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="pd-github">
          <FontAwesomeIcon icon={faGithub} />
          <span>View source</span>
        </a>
      </header>

      <section className="pd-hero">
        <div className="pd-inner pd-hero-inner">
          <p className="pd-breadcrumb pd-fade-in">
            <button type="button" onClick={() => navigate('/')}>Portfolio</button>
            <span aria-hidden>/</span>
            <button type="button" onClick={() => navigate('/#projects')}>Projects</button>
            <span aria-hidden>/</span>
            <span className="pd-breadcrumb-current">{project.title}</span>
          </p>

          <div className="pd-hero-grid">
            <div className="pd-hero-copy">
              <p className="project-tagline pd-fade-in pd-delay-1">{project.subtitle}</p>
              <h1 className="pd-fade-in pd-delay-2">{project.title}</h1>
              {(project.status || project.mentor) ? (
                <div className="pd-project-meta pd-fade-in pd-delay-3">
                  {project.status ? <span className="pd-project-status">{project.status}</span> : null}
                  {project.mentor ? <span>Mentor: {project.mentor}</span> : null}
                </div>
              ) : null}
              <p className="pd-desc pd-fade-in pd-delay-3">{project.description}</p>

              {project.storyParagraphs?.length ? (
                <div className="pd-story-box pd-fade-in pd-delay-4">
                  {project.storyParagraphs.map((story) => (
                    <p key={story}>{story}</p>
                  ))}
                </div>
              ) : null}

              {project.messes?.length ? (
                <div className="pd-mess-row pd-fade-in pd-delay-4">
                  {project.messes.map((m) => (
                    <span key={m} className="pd-mess-chip">{m}</span>
                  ))}
                </div>
              ) : null}

              <div className="pd-tags pd-fade-in pd-delay-5">
                {project.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="pd-hero-visual pd-fade-in pd-delay-2">
              <div className="pd-cover-ring">
                <img src={project.imgSrc} alt={project.title} className="pd-cover" />
              </div>
            </div>
          </div>

          <div className="pd-stats pd-fade-in pd-delay-5">
            {project.messes?.length ? (
              <div className="pd-stat">
                <span className="pd-stat-value">{project.messes.length}</span>
                <span className="pd-stat-label">Campus mess units</span>
              </div>
            ) : null}
            <div className="pd-stat">
              <span className="pd-stat-value">{flowCount}</span>
              <span className="pd-stat-label">Product flows</span>
            </div>
            <div className="pd-stat">
              <span className="pd-stat-value">{screenshotCount}</span>
              <span className="pd-stat-label">UI screens</span>
            </div>
            <div className="pd-stat">
              <FontAwesomeIcon icon={faServer} className="pd-stat-icon" />
              <span className="pd-stat-label">{project.tags[0]} stack</span>
            </div>
          </div>
        </div>
      </section>

      <article className="pd-inner pd-content">
        <Reveal className="pd-block">
          <div className="pd-section-head">
            <span className="pd-section-label">Overview</span>
            <h2>Key <span className="accent">highlights</span></h2>
            <div className="pd-section-line" />
          </div>
          <div className="pd-highlight-grid">
            {project.highlights.map((line, i) => (
              <Reveal key={line} className="pd-highlight-card" delay={i * 70}>
                <span className="pd-highlight-num">{String(i + 1).padStart(2, '0')}</span>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {project.screenshotSections?.length ? (
          <section className="pd-showcase">
            <Reveal className="pd-section-head pd-section-head-center">
              <span className="pd-section-label">Case study</span>
              <h2>Product <span className="accent">walkthrough</span></h2>
              <p className="pd-section-lead">
                End-to-end flows from campus hub to student and admin experiences across all mess units.
              </p>
              <div className="pd-section-line" />
            </Reveal>

            <div className="pd-timeline">
              {project.screenshotSections.map((section, idx) => {
                const Icon = FLOW_ICONS[idx % FLOW_ICONS.length];
                const shotCount = section.images.length;
                return (
                  <Reveal key={section.title} className="pd-flow" delay={idx * 60}>
                    <div className="pd-flow-marker">
                      <span className="pd-flow-step">{String(idx + 1).padStart(2, '0')}</span>
                      {idx < project.screenshotSections.length - 1 ? <span className="pd-flow-line" /> : null}
                    </div>
                    <div className="pd-flow-body">
                      <div className="pd-flow-header">
                        <div className="pd-flow-icon" aria-hidden>
                          <FontAwesomeIcon icon={Icon} />
                        </div>
                        <div>
                          <h3>{section.title}</h3>
                          <p>{section.description}</p>
                        </div>
                      </div>
                      <div className={`pd-shots pd-shots--${Math.min(shotCount, 3)}`}>
                        {section.images.map((img, imgIdx) => (
                          <figure key={img.caption} className="pd-shot" style={{ '--shot-i': imgIdx }}>
                            <button
                              type="button"
                              className="pd-shot-btn"
                              onClick={() => setLightbox(img)}
                              aria-label={`Expand screenshot: ${img.caption}`}
                            >
                              <div className="pd-shot-frame">
                                <img src={img.src} alt={img.caption} loading="lazy" />
                                <span className="pd-shot-zoom">
                                  <FontAwesomeIcon icon={faExpand} />
                                </span>
                              </div>
                            </button>
                            <figcaption>{img.caption}</figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        ) : null}
      </article>

      <footer className="pd-cta">
        <Reveal className="pd-cta-card">
          <h3>Explore more work</h3>
          <p>Return to the portfolio to see other full-stack projects and certifications.</p>
          <button type="button" className="btn-primary" onClick={() => navigate('/#projects')}>
            View all projects
          </button>
        </Reveal>
      </footer>

      {lightbox ? (
        <div
          className="pd-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onClick={() => setLightbox(null)}
        >
          <button type="button" className="pd-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <figure className="pd-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
