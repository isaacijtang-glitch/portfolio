import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import type { Project } from '../data';
import { PdfViewer } from '../components/PdfViewer';

export function ProjectDetail({ projects }: { projects: Project[] }) {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox]);

  if (!project) {
    return (
      <div className="detail-not-found">
        <p>Project not found.</p>
        <Link to="/" className="back-link">← Back to portfolio</Link>
      </div>
    );
  }

  const hasPdfs = project.pdfs && project.pdfs.length > 0;

  return (
    <div className={`detail-page${hasPdfs ? ' has-pdf' : ''}`}>
      <div className="detail-header">
        <div className="container">
          <Link to="/" state={{ scrollTo: '#projects' }} className="back-link">← Back to projects</Link>
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
          {project.gallery && project.gallery.length > 0 && (
            <div className="detail-gallery">
              {project.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  className="gallery-img"
                  loading="lazy"
                  onClick={() => setLightbox(src)}
                />
              ))}
            </div>
          )}
          {!project.gallery && project.image && (
            <img src={project.image} alt={project.title} className="detail-image" />
          )}
        </div>
      </div>

      {hasPdfs && project.pdfs!.map((entry, i) => (
        <div key={i} className="pdf-section">
          <div className="container">
            <div className="pdf-label">/ {entry.label}</div>
            {entry.description && (
              <p className="pdf-desc">{entry.description}</p>
            )}
          </div>
          <div className="pdf-viewer">
            <PdfViewer src={entry.src} />
          </div>
        </div>
      ))}

      <footer className="footer">
        <p>Designed &amp; built by Isaac Tang · {new Date().getFullYear()}</p>
      </footer>

      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <img
            src={lightbox}
            alt="Preview"
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
