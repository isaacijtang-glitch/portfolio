import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let started = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!started) {
        rx = mx; ry = my;
        started = true;
        dotRef.current!.style.opacity = '1';
        ringRef.current!.style.opacity = '1';
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      dotRef.current!.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      ringRef.current!.style.transform = `translate(${rx - 14}px, ${ry - 14}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
