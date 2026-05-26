import { useIntersection } from '../hooks/useIntersection';

export function About({
  bio,
  bio2,
  stats,
}: {
  bio: string;
  bio2: string;
  stats: { label: string; value: string }[];
}) {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="about"
      className={`about-section section-fade${isVisible ? ' visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container">
        <div className="section-label">/ About</div>
        <div className="about-grid">
          <div className="about-visual">
            <div className="photo-placeholder">
              <div className="photo-inner">
                <span className="photo-initials">IT</span>
              </div>
              <div className="photo-frame" />
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-heading">
              Bridging architecture
              <br />
              and technology.
            </h2>
            <p className="about-bio">{bio}</p>
            <p className="about-bio">{bio2}</p>
            <div className="stats-row">
              {stats.map(s => (
                <div key={s.label} className="stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
