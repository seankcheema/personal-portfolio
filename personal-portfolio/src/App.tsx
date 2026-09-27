// @ts-nocheck
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import PORTFOLIO from './data/portfolio.ts';
import { PaNav, PaHome, PaCase, PaFooter, PaLightbox, pa } from './components/Site.tsx';
import { FadeIn, scrollToId, reduceMotion } from './components/motion.tsx';

// Page transitions: the current page fades out (0.42s), then the next route mounts and fades in.
function Shell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [shown, setShown] = React.useState(location);
  const [out, setOut] = React.useState(false);
  const [zoomSrc, setZoom] = React.useState(null);

  React.useEffect(() => {
    if (location.pathname === shown.pathname) {
      if (location.state && location.state.scrollTo) scrollToId(location.state.scrollTo);
      setShown(location);
      return;
    }
    if (reduceMotion) { setShown(location); window.scrollTo(0, 0); return; }
    setOut(true);
    const t = setTimeout(() => {
      setShown(location); window.scrollTo(0, 0); setOut(false);
      if (location.state && location.state.scrollTo) setTimeout(() => scrollToId(location.state.scrollTo, true), 60);
    }, 420);
    return () => clearTimeout(t);
  }, [location, shown.pathname]);

  // go('') -> home, go('requestify') -> case study, go('', 'about') -> home + scroll to section
  const go = React.useCallback((slug, anchor) => {
    const path = '/' + (slug || '');
    if (path === location.pathname) { anchor ? scrollToId(anchor) : window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    navigate(path, { state: anchor ? { scrollTo: anchor } : null });
  }, [location, navigate]);

  return (
    <div style={{ background: pa.paper, color: pa.ink, minHeight: '100vh' }}>
      <PaNav go={go} />
      <div style={{ transition: 'opacity .42s cubic-bezier(.4,0,.2,1), transform .42s cubic-bezier(.4,0,.2,1)', opacity: out ? 0 : 1, transform: out ? 'translateY(-6px)' : 'none' }}>
        <FadeIn key={shown.pathname} y={0} dur={0.6}>
          <Routes location={shown}>
            <Route path="/" element={<PaHome go={go} />} />
            {PORTFOLIO.projects.map((p) => <Route key={p.slug} path={'/' + p.slug} element={<PaCase p={p} go={go} zoom={setZoom} />} />)}
            <Route path="*" element={<PaHome go={go} />} />
          </Routes>
          <PaFooter />
        </FadeIn>
      </div>
      <PaLightbox src={zoomSrc} onClose={() => setZoom(null)} />
    </div>
  );
}

export default function App() {
  return <Router><Shell /></Router>;
}
