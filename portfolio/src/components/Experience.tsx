import React from 'react';
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
          {experiences.map((exp, i) => {
            const CardWrapper = ({ children }: { children: React.ReactNode }) =>
              exp.website ? (
                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="experience-card">
                  {children}
                </a>
              ) : (
                <div className="experience-card">{children}</div>
              );

            return (
              <CardWrapper key={i}>
                <div className="experience-card-header">
                  <div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="experience-logo"
                      style={{
                        ...(exp.logoWhite ? { filter: 'brightness(0) invert(1)' } : {}),
                        ...(exp.logoSize ? { height: `${exp.logoSize}px` } : {}),
                      }}
                    />
                  )}
                </div>
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
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
