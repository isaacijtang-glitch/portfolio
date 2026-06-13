import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const links = [
  { hash: '#about', label: 'About' },
  { hash: '#experience', label: 'Experience' },
  { hash: '#projects', label: 'Projects' },
  { hash: '#skills', label: 'Skills' },
  { hash: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === '/') {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: hash } });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="/" onClick={(e) => { e.preventDefault(); location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/'); }} className="navbar-logo">
          <span className="logo-bracket">[</span>
          IT
          <span className="logo-bracket">]</span>
        </a>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.hash}>
              <a href={`/${l.hash}`} onClick={(e) => handleNavClick(e, l.hash)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
