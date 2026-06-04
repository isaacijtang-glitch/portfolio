import { Link } from 'react-router-dom';
import { useIntersection } from '../hooks/useIntersection';
import type { Project } from '../data';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
      )}
      <div className="project-number">0{index + 1}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-pill">
            {t}
          </span>
        ))}
      </div>
      {(project.github && project.github !== '#') || (project.demo && project.demo !== '#') ? (
        <div className="project-icons">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="View on GitHub"
              onClick={e => e.stopPropagation()}
            >
              <GithubIcon />
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Live demo"
              onClick={e => e.stopPropagation()}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      ) : null}
    </Link>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="projects"
      className={`projects-section section-fade${isVisible ? ' visible' : ''}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container">
        <div className="section-label">/ Projects</div>
        <h2 className="section-heading">Things I've built.</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
