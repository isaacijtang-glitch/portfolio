import { useIntersection } from '../hooks/useIntersection';

export function About({
  bio,
  bio2,
}: {
  bio: string;
  bio2: string;
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
              Making things,
              <br />
              figuring things out.
            </h2>
            <p className="about-bio">{bio}</p>
            <p className="about-bio">{bio2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
