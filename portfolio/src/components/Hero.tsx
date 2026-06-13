import { useState, useEffect } from 'react';

const roles = [
  'Architectural Engineering Student',
  'Junior Mechanical Designer',
  'Designer & Builder',
  'Always Exploring',
];

export function Hero({
  name,
  tagline,
}: {
  name: string;
  tagline: string;
}) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-content">
        <p className="hero-eyebrow">Hello, I'm</p>
        <h1 className="hero-name">{name}</h1>
        <div className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll to about">
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}
