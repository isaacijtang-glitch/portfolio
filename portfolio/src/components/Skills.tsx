import { useIntersection } from '../hooks/useIntersection';

export function Skills({ skills }: { skills: Record<string, string[]> }) {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="skills"
      className={`skills-section section-fade${isVisible ? ' visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container">
        <div className="section-label">/ Skills</div>
        <h2 className="section-heading">What I work with.</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-chips">
                {items.map(skill => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
