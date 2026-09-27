// @ts-nocheck
import React from 'react';
// Motion primitives: scroll reveals, hero word reveal, fade-in, hover hook.
const motionEase = 'cubic-bezier(.16,1,.3,1)';
const mq = (q) => typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(q) : null;
const reduceMotion = !!(mq('(prefers-reduced-motion: reduce)') || {}).matches;
// Touch devices fire mouseenter on tap and never leave, so hover states would stick on.
const canHover = !mq('(hover: hover)') || mq('(hover: hover)').matches;

// Breakpoints, so the inline-style layouts can branch the same way CSS media queries would.
const BP = { phone: '(max-width: 640px)', compact: '(max-width: 900px)', narrow: '(max-width: 860px)' };

function useMedia(query) {
  const [on, setOn] = React.useState(() => !!(mq(query) || {}).matches);
  React.useEffect(() => {
    const m = mq(query);
    if (!m) return;
    setOn(m.matches);
    const f = (e) => setOn(e.matches);
    m.addEventListener ? m.addEventListener('change', f) : m.addListener(f);
    return () => { m.removeEventListener ? m.removeEventListener('change', f) : m.removeListener(f); };
  }, [query]);
  return on;
}

function scrollToId(id, instant) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: instant ? 'auto' : 'smooth' });
}

function Reveal({ children, delay = 0, y = 16, as = 'div', style, ...rest }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(reduceMotion);
  React.useEffect(() => {
    if (reduceMotion || !ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return React.createElement(as, { ref, ...rest, style: { ...style, opacity: on ? 1 : 0, transform: on ? 'none' : `translateY(${y}px)`, transition: `opacity 1s ${motionEase} ${delay}s, transform 1.2s ${motionEase} ${delay}s` } }, children);
}

function SplitWords({ text, delay = 0, stagger = 0.05, style }) {
  const [on, setOn] = React.useState(reduceMotion);
  React.useEffect(() => { const t = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true))); return () => cancelAnimationFrame(t); }, []);
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline', ...style }} aria-label={text}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span aria-hidden="true" style={{ display: 'inline-block', opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(.28em)', filter: on ? 'none' : 'blur(6px)', transition: `opacity 1.1s ${motionEase} ${delay + i * stagger}s, transform 1.3s ${motionEase} ${delay + i * stagger}s, filter 1.1s ${motionEase} ${delay + i * stagger}s` }}>{w}</span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
}

function FadeIn({ children, delay = 0, y = 10, dur = 1, style }) {
  const [on, setOn] = React.useState(reduceMotion);
  React.useEffect(() => { const t = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true))); return () => cancelAnimationFrame(t); }, []);
  return <div style={{ ...style, opacity: on ? 1 : 0, transform: on ? 'none' : `translateY(${y}px)`, transition: `opacity ${dur}s ${motionEase} ${delay}s, transform ${dur * 1.15}s ${motionEase} ${delay}s` }}>{children}</div>;
}

function useHover() {
  const [h, setH] = React.useState(false);
  if (!canHover) return [false, {}];
  return [h, { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) }];
}

export { scrollToId, Reveal, SplitWords, FadeIn, useHover, useMedia, motionEase, reduceMotion, canHover, BP };
