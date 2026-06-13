import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function PdfViewer({ src }: { src: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [pageAspect, setPageAspect] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    setContainerWidth(el.clientWidth);
    return () => observer.disconnect();
  }, []);

  const firstPageHeight =
    pageAspect && containerWidth ? Math.round(containerWidth * pageAspect) : undefined;

  return (
    <div
      ref={containerRef}
      className="pdf-react-container"
      style={{
        height: firstPageHeight,
        overflowY: firstPageHeight ? 'auto' : undefined,
        overflowX: 'hidden',
        overscrollBehavior: 'contain',
      }}
    >
      <Document
        file={src}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={containerWidth || undefined}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onLoadSuccess={i === 0 ? (page) => {
              const [x1, y1, x2, y2] = page.view;
              setPageAspect((y2 - y1) / (x2 - x1));
            } : undefined}
          />
        ))}
      </Document>
    </div>
  );
}
