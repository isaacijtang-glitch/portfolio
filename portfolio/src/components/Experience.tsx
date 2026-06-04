import { useIntersection } from '../hooks/useIntersection';
import type { Experience as ExperienceType } from '../data';

export function Experience({ experiences }: { experiences: ExperienceType[] }) {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="experience"
      className={`experience-section section-fade${isVisible ? ' visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container">
        <div className="section-label">/ Experience</div>
        <h2 className="section-heading">Where I've worked.</h2>
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-entry">
              <div className="experience-marker">
                <div className="experience-dot" />
              </div>
              <div className="experience-body">
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
                <h3 className="experience-role">{exp.role}</h3>
                <div className="experience-company">{exp.company}</div>
                <ul className="experience-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="experience-tags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="skill-chip">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
