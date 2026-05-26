import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import type { Project } from '../data';

export function ProjectDetail({ projects }: { projects: Project[] }) {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="detail-not-found">
        <p>Project not found.</p>
        <Link to="/" className="back-link">← Back to portfolio</Link>
      </div>
    );
  }

  return (
    <div className={`detail-page${project.pdf ? ' has-pdf' : ''}`}>
      <div className="detail-header">
        <div className="container">
          <Link to="/#projects" className="back-link">← Back to projects</Link>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-desc">{project.description}</p>
          <div className="project-tech">
            {project.tech.map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          {(project.github || project.demo) && (
            <div className="detail-links">
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  GitHub ↗
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {project.pdf && (
        <div className="pdf-section">
          <div className="container">
            <div className="pdf-label">/ Drawing Set & Documentation</div>
          </div>
          <div className="pdf-viewer">
            <embed
              src={project.pdf}
              type="application/pdf"
            />
          </div>
        </div>
      )}

      {!project.pdf && project.image && (
        <div className="container">
          <img src={project.image} alt={project.title} className="detail-image" />
        </div>
      )}
    </div>
  );
}
