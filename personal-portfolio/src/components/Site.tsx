// @ts-nocheck
// Site UI: nav, home, case study, footer, lightbox. Soft dark editorial theme.
// Layout branches on useMedia(BP.*) because every style here is inline — those
// breakpoints stand in for the CSS media queries we can't write against them.
import React from 'react';
import PORTFOLIO from '../data/portfolio.ts';
import { Reveal, SplitWords, FadeIn, useHover, useMedia, motionEase, BP } from './motion.tsx';
const pa = {
  paper: '#1C1A17', ink: '#F2EFE7', muted: '#A39C8E', rule: '#34302A', well: '#25221E', body: '#CFC8BA',
  serif: "'Newsreader', Georgia, serif", sans: "'Geist', system-ui, sans-serif", mono: "'Geist Mono', ui-monospace, monospace",
};
const paTint = (c, p = 16) => `color-mix(in oklch, ${c} ${p}%, ${pa.paper})`;
const paTile = (p) => p.tile ? `color-mix(in srgb, ${p.tile} 65%, transparent)` : paTint(p.accent, 16);
const paWrap = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)', boxSizing: 'border-box' };
const paMono = { fontFamily: pa.mono, fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase', color: pa.muted };
const NAV_H = 64;

// Locking scroll on <body> would make it a scroll container, which breaks the sticky
// header exactly the way overflow-x:hidden did (see App.css). The document scrolls on
// <html>, so lock there and the bar stays pinned while an overlay is open.
function useScrollLock(active) {
  React.useEffect(() => {
    if (!active) return;
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = 'hidden';
    return () => { el.style.overflow = prev; };
  }, [active]);
}

function PaLink({ href = '#', onClick, children, ext, style }) {
  const [h, hp] = useHover();
  return (
    <a href={href} onClick={onClick} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined} {...hp}
      style={{ color: pa.ink, textDecoration: 'none', position: 'relative', display: 'inline-flex', gap: 6, alignItems: 'baseline', ...style }}>
      <span style={{ backgroundImage: `linear-gradient(${pa.ink},${pa.ink})`, backgroundSize: h ? '100% 1px' : '0% 1px', backgroundPosition: '0 100%', backgroundRepeat: 'no-repeat', transition: `background-size .4s ${motionEase}` }}>{children}</span>
      {ext && <span style={{ fontSize: '.85em', transform: h ? 'translate(2px,-2px)' : 'none', transition: `transform .3s ${motionEase}` }}>↗</span>}
    </a>
  );
}

// Nav destinations, shared by the desktop bar and the phone sheet.
const navItems = (go, close) => [
  { label: 'Work', href: '#work', onClick: (e) => { e.preventDefault(); close && close(); go('', 'work'); } },
  { label: 'About', href: '#about', onClick: (e) => { e.preventDefault(); close && close(); go('', 'about'); } },
  { label: 'Resume', href: PORTFOLIO.socials.find((s) => s.label === 'Resume').href, ext: true, onClick: close },
  { label: 'Contact', href: 'mailto:' + PORTFOLIO.email, onClick: close },
];

function PaMenuButton({ open, onClick }) {
  const bar = { display: 'block', width: 22, height: 1.5, background: pa.ink, borderRadius: 2, transition: `transform .38s ${motionEase}` };
  return (
    <button type="button" onClick={onClick} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="pa-menu"
      style={{ appearance: 'none', background: 'none', border: 0, padding: 0, margin: 0, width: 44, height: 44, marginRight: -10, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer', color: pa.ink }}>
      <span style={{ ...bar, transform: open ? 'translateY(3.75px) rotate(45deg)' : 'none' }}></span>
      <span style={{ ...bar, transform: open ? 'translateY(-3.75px) rotate(-45deg)' : 'none' }}></span>
    </button>
  );
}

function PaNav({ go }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const phone = useMedia(BP.phone);
  React.useEffect(() => { const f = () => setScrolled(window.scrollY > 20); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  // Leaving the phone breakpoint (rotation, resize) must not leave the sheet stuck open.
  React.useEffect(() => { if (!phone) setOpen(false); }, [phone]);
  // While the sheet is open: freeze the page behind it and let Escape dismiss it.
  useScrollLock(open);
  React.useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);

  // backdrop-filter makes the header a containing block for its fixed-position
  // children, which would size the menu sheet against the 64px bar instead of the
  // viewport. So the open menu gets a flat opaque bar and no blur.
  const glass = scrolled && !open;
  const items = navItems(go, () => setOpen(false));
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: open ? pa.paper : scrolled ? 'rgba(28,26,23,.86)' : 'transparent', backdropFilter: glass ? 'blur(12px)' : 'none', WebkitBackdropFilter: glass ? 'blur(12px)' : 'none', borderBottom: `1px solid ${glass ? pa.rule : 'transparent'}`, transition: 'background .3s, border-color .3s' }}>
      <div style={{ ...paWrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: NAV_H, gap: 16 }}>
        <a href="/" onClick={(e) => { e.preventDefault(); setOpen(false); go(''); }} style={{ fontFamily: pa.serif, fontSize: 'clamp(19px, 5vw, 21px)', color: pa.ink, textDecoration: 'none', letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>Sean Cheema</a>
        {phone ? <PaMenuButton open={open} onClick={() => setOpen((v) => !v)} /> : (
          <nav style={{ display: 'flex', gap: 'clamp(14px, 2.5vw, 32px)', fontFamily: pa.sans, fontSize: 14 }}>
            {items.map((it) => <PaLink key={it.label} href={it.href} onClick={it.onClick} ext={it.ext}>{it.label}</PaLink>)}
          </nav>
        )}
      </div>
      {phone && (
        <div id="pa-menu" style={{ position: 'fixed', left: 0, right: 0, top: NAV_H, bottom: 0, background: pa.paper, padding: '8px clamp(20px, 4vw, 48px) 40px', display: 'flex', flexDirection: 'column',
          opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(-8px)', pointerEvents: open ? 'auto' : 'none', visibility: open ? 'visible' : 'hidden',
          transition: `opacity .32s ${motionEase}, transform .32s ${motionEase}, visibility .32s` }}>
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((it, i) => (
              <a key={it.label} href={it.href} onClick={it.onClick} target={it.ext ? '_blank' : undefined} rel={it.ext ? 'noopener noreferrer' : undefined}
                style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 34, letterSpacing: '-.02em', color: pa.ink, textDecoration: 'none', padding: '18px 0', borderBottom: `1px solid ${pa.rule}`, display: 'flex', alignItems: 'center', gap: 10,
                  opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(10px)', transition: `opacity .5s ${motionEase} ${0.06 + i * 0.05}s, transform .5s ${motionEase} ${0.06 + i * 0.05}s` }}>
                {it.label}{it.ext && <span style={{ fontSize: '.6em' }}>↗</span>}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function PaWorkRow({ p, i, go }) {
  const [h, hp] = useHover();
  const compact = useMedia(BP.compact);
  const num = <span style={{ ...paMono, alignSelf: 'start', paddingTop: compact ? 0 : 14 }}>0{i + 1}</span>;
  const title = (
    <div style={{ transform: h ? 'translateX(8px)' : 'none', transition: `transform .5s ${motionEase}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ width: 10, height: 10, borderRadius: 10, background: p.accent, flex: '0 0 auto', transform: h ? 'scale(1)' : 'scale(.6)', transition: `transform .4s ${motionEase}` }}></span>
        <h3 style={{ fontFamily: pa.serif, fontWeight: 400, fontSize: 'clamp(30px, 3.6vw, 52px)', lineHeight: 1.04, margin: 0, letterSpacing: '-.02em', whiteSpace: compact ? 'normal' : 'nowrap', overflowWrap: 'break-word', minWidth: 0 }}>{p.title}</h3>
      </div>
      {!compact && <div style={{ ...paMono, marginTop: 12, marginLeft: 24 }}>{p.year}</div>}
    </div>
  );
  const pitch = <p style={{ fontFamily: pa.sans, fontSize: compact ? 15 : 16, lineHeight: 1.5, color: pa.muted, margin: 0, textWrap: 'pretty' }}>{p.pitch}</p>;
  const thumb = (
    <div style={{ background: paTile(p, h), borderRadius: 6, aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', transition: `background .4s ${motionEase}` }}>
      <img src={p.image} alt="" style={{ width: '86%', height: '86%', objectFit: 'contain', transform: h ? 'scale(1.05)' : 'none', transition: `transform .6s ${motionEase}` }} />
    </div>
  );

  // Phone/tablet: one column — meta, art, title, pitch. Desktop keeps the 4-up editorial row.
  if (compact) return (
    <Reveal delay={i * 0.06}>
      <a href={'/' + p.slug} onClick={(e) => { e.preventDefault(); go(p.slug); }} {...hp}
        style={{ display: 'block', padding: '24px 0', borderTop: `1px solid ${pa.rule}`, color: pa.ink, textDecoration: 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>{num}<span style={paMono}>{p.year}</span></div>
        {thumb}
        <div style={{ marginTop: 20 }}>{title}</div>
        <div style={{ marginTop: 12 }}>{pitch}</div>
      </a>
    </Reveal>
  );
  return (
    <Reveal delay={i * 0.06}>
      <a href={'/' + p.slug} onClick={(e) => { e.preventDefault(); go(p.slug); }} {...hp}
        style={{ display: 'grid', gridTemplateColumns: 'minmax(0,48px) minmax(0,1.3fr) minmax(0,1fr) minmax(0,220px)', gap: 'clamp(12px,2.5vw,32px)', alignItems: 'center', padding: '28px 0', borderTop: `1px solid ${pa.rule}`, color: pa.ink, textDecoration: 'none' }}>
        {num}{title}{pitch}{thumb}
      </a>
    </Reveal>
  );
}

function PaExperienceRow({ x, i }) {
  const phone = useMedia(BP.phone);
  const logo = <div style={{ width: 44, height: 44, borderRadius: 6, overflow: 'hidden', flex: '0 0 auto' }}><img src={x.logo} alt="" style={{ width: '100%', height: '100%', objectFit: x.zoom ? 'contain' : 'cover', objectPosition: 'center', display: 'block', transform: `scale(${x.zoom || 1.12})`, borderRadius: x.zoom ? 6 : 0 }} /></div>;
  const base = { padding: '20px 0', borderTop: `1px solid ${pa.rule}`, fontFamily: pa.sans };

  // Phone: logo beside a stacked role / company / dates block, so nothing gets crushed.
  if (phone) return (
    <Reveal delay={i * 0.05} style={{ ...base, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      {logo}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: pa.serif, fontSize: 21, letterSpacing: '-.01em', lineHeight: 1.2 }}>{x.role}</div>
        <div style={{ fontSize: 15, color: pa.muted, marginTop: 4 }}>{x.company}</div>
        <div style={{ ...paMono, marginTop: 8 }}>{x.dates}</div>
      </div>
    </Reveal>
  );
  return (
    <Reveal delay={i * 0.05} style={{ ...base, display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) minmax(0,1fr) 140px', gap: 20, alignItems: 'center' }}>
      {logo}
      <span style={{ fontFamily: pa.serif, fontSize: 24, letterSpacing: '-.01em' }}>{x.role}</span>
      <span style={{ fontSize: 16, color: pa.muted }}>{x.company}</span>
      <span style={{ ...paMono, textAlign: 'right' }}>{x.dates}</span>
    </Reveal>
  );
}

function PaHome({ go }) {
  const P = PORTFOLIO;
  const narrow = useMedia(BP.narrow);
  const phone = useMedia(BP.phone);
  return (
    <main>
      <section style={{ ...paWrap, paddingTop: 'clamp(72px, 14vw, 160px)', paddingBottom: 'clamp(64px, 10vw, 120px)' }}>
        <FadeIn delay={0.05}><div style={{ ...paMono, marginBottom: 28, display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>{P.hero.tag.map((t, i) => <span key={i} style={{ display: 'inline-flex', gap: 14 }}>{i > 0 && <span style={{ color: pa.rule }}>/</span>}{t}</span>)}</div></FadeIn>
        <h1 style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(54px, 12vw, 172px)', lineHeight: .95, letterSpacing: '-.035em', margin: 0, color: pa.ink, overflowWrap: 'break-word' }}>
          <SplitWords text={P.hero.greeting} delay={0.1} stagger={0.08} />
        </h1>
        <p style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(24px, 3.2vw, 42px)', lineHeight: 1.22, letterSpacing: '-.01em', margin: '32px 0 0', maxWidth: '22ch', color: pa.ink }}>
          <SplitWords text={P.hero.line} delay={0.4} stagger={0.03} />
        </p>
      </section>

      <section id="work" style={{ ...paWrap, paddingBottom: 'clamp(72px, 10vw, 120px)' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 18 }}><span style={paMono}>Selected work</span><span style={paMono}>0{P.projects.length}</span></Reveal>
        {P.projects.map((p, i) => <PaWorkRow key={p.slug} p={p} i={i} go={go} />)}
        <div style={{ borderTop: `1px solid ${pa.rule}` }}></div>
      </section>

      <section id="now" style={{ background: pa.well, color: pa.ink, borderTop: `1px solid ${pa.rule}`, borderBottom: `1px solid ${pa.rule}` }}>
        <div style={{ ...paWrap, padding: 'clamp(56px,9vw,120px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: narrow ? 28 : 40 }}>
          <Reveal>
            <div style={{ ...paMono, color: '#A39D90' }}>Now</div>
            <img src={P.experience[0].logo} alt="Fidelity Investments" style={{ width: 56, height: 56, borderRadius: 8, objectFit: 'cover', marginTop: 24, display: 'block' }} />
          </Reveal>
          {/* span 2 would invent an overflowing implicit column once auto-fit collapses to one track. */}
          <Reveal delay={0.08} style={{ gridColumn: narrow ? 'auto' : 'span 2' }}>
            <p style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(25px, 3.4vw, 44px)', lineHeight: 1.22, letterSpacing: '-.01em', margin: 0, textWrap: 'pretty' }}>{P.now.text}</p>
            <div style={{ ...paMono, color: '#A39D90', marginTop: 28 }}>{P.now.since} – Present</div>
          </Reveal>
        </div>
      </section>

      <section id="experience" style={{ ...paWrap, paddingTop: 'clamp(72px, 10vw, 120px)' }}>
        <Reveal style={{ paddingBottom: 18 }}><span style={paMono}>Experience</span></Reveal>
        {P.experience.map((x, i) => <PaExperienceRow key={i} x={x} i={i} />)}
        <div style={{ borderTop: `1px solid ${pa.rule}` }}></div>
      </section>

      <section id="about" style={{ ...paWrap, padding: 'clamp(72px,10vw,120px) clamp(20px,4vw,48px)', display: 'flex', flexWrap: 'wrap', gap: 'clamp(28px,4vw,48px)', alignItems: 'flex-start' }}>
        <Reveal style={{ flex: '0 1 440px', minWidth: 0, width: '100%' }}>
          <div style={{ ...paMono, marginBottom: 18 }}>About</div>
          <img src={P.headshot} alt="Sean Cheema headshot" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 6, display: 'block' }} />
        </Reveal>
        <Reveal delay={0.1} style={{ paddingTop: narrow ? 0 : 34, flex: '1 1 440px', minWidth: 0 }}>
          {P.about.map((t, i) => <p key={i} style={{ fontFamily: i === 0 ? pa.serif : pa.sans, fontWeight: i === 0 ? 300 : 400, fontSize: i === 0 ? 'clamp(23px,2.6vw,32px)' : 17, lineHeight: i === 0 ? 1.3 : 1.62, margin: '0 0 24px', color: i === 0 ? pa.ink : pa.body, textWrap: 'pretty' }}>{t}</p>)}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: phone ? '4px 24px' : 24, marginTop: 36, fontFamily: pa.sans, fontSize: 15 }}>
            {P.socials.map((s) => <PaLink key={s.label} href={s.href} ext={!s.href.startsWith('mailto')} style={{ padding: phone ? '10px 0' : 0 }}>{s.label}</PaLink>)}
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function PaBody({ items }) {
  return items.map((b, i) => {
    const p = { fontFamily: pa.sans, fontSize: 17, lineHeight: 1.65, color: pa.body, margin: '0 0 16px', textWrap: 'pretty' };
    if (typeof b === 'string') return <p key={i} style={p}>{b}</p>;
    if (b.list) return <ul key={i} style={{ ...p, paddingLeft: 0, listStyle: 'none' }}>{b.list.map((l, j) => <li key={j} style={{ padding: '8px 0', borderTop: `1px solid ${pa.rule}` }}>{l}</li>)}</ul>;
    if (b.lead) return <p key={i} style={p}><em style={{ fontFamily: pa.serif, fontSize: 19, color: pa.ink }}>{b.lead}</em> {b.text}</p>;
    if (b.quote) return <blockquote key={i} style={{ margin: '28px 0', fontFamily: pa.serif, fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(23px, 4vw, 30px)', lineHeight: 1.28, color: pa.ink, paddingLeft: 0 }}>{b.quote}<div style={{ ...paMono, fontStyle: 'normal', marginTop: 12 }}>{b.by}</div></blockquote>;
    if (b.link) return <p key={i} style={p}>{b.link}<PaLink href={b.href} ext>{b.label}</PaLink>.</p>;
    return null;
  });
}

function PaSection({ s, accent, stacked }) {
  const narrow = useMedia(BP.narrow);
  if (s.t === 'table') return (
    <Reveal>
      <h3 style={{ fontFamily: pa.serif, fontWeight: 400, fontSize: 'clamp(24px,3vw,28px)', margin: '0 0 18px', letterSpacing: '-.01em' }}>{s.title}</h3>
      {s.rows.map((r, i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px 24px', padding: '14px 0', borderTop: `1px solid ${pa.rule}`, fontFamily: pa.sans, fontSize: 16 }}><span style={paMono}>{r.label}</span><span>{r.value}</span></div>)}
    </Reveal>
  );
  if (stacked) return (
    <Reveal>
      {s.title && <h3 style={{ fontFamily: pa.serif, fontWeight: 400, fontSize: 'clamp(24px,3vw,28px)', margin: '0 0 18px', letterSpacing: '-.01em' }}>{s.title}</h3>}
      <PaBody items={s.body} />
    </Reveal>
  );
  return (
    <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(16px,4vw,64px)', padding: narrow ? '32px 0 16px' : '48px 0 24px' }}>
      <h3 style={{ fontFamily: pa.serif, fontWeight: 400, fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.12, margin: 0, letterSpacing: '-.015em' }}>{s.title}</h3>
      <div style={{ gridColumn: narrow ? 'auto' : 'span 2', maxWidth: 680, minWidth: 0 }}><PaBody items={s.body} /></div>
    </Reveal>
  );
}

function PaCase({ p, go, zoom }) {
  const P = PORTFOLIO, idx = P.projects.indexOf(p), next = P.projects[(idx + 1) % P.projects.length];
  const [nh, nhp] = useHover();
  const narrow = useMedia(BP.narrow);
  const block = (b, i) => {
    if (b.t === 'section') return <PaSection key={i} s={b} accent={p.accent} />;
    if (b.t === 'table') return <PaSection key={i} s={b} />;
    if (b.t === 'pair') return <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(28px,5vw,72px)', padding: narrow ? '32px 0 16px' : '48px 0 24px', borderTop: `1px solid ${pa.rule}` }}>{b.items.map((s, j) => <PaSection key={j} s={s} stacked />)}</div>;
    if (b.t === 'fig') return (
      <Reveal key={i} as="figure" style={{ margin: '32px 0' }}>
        <div onClick={() => zoom(b.src)} style={{ background: pa.well, borderRadius: 6, padding: 'clamp(12px,3vw,40px)', cursor: 'zoom-in', display: 'flex', justifyContent: 'center' }}>
          <img src={b.src} alt={b.caption} style={{ width: '100%', maxWidth: b.size === 'sm' ? 480 : '100%', display: 'block' }} />
        </div>
        <figcaption style={{ ...paMono, marginTop: 12 }}>{b.caption}{narrow && ' · tap to enlarge'}</figcaption>
      </Reveal>
    );
    // preload="none" keeps the page light: nothing downloads until the poster is played.
    if (b.t === 'video') return (
      <Reveal key={i} as="figure" style={{ margin: '32px 0' }}>
        <div style={{ background: pa.well, borderRadius: 6, padding: 'clamp(12px,3vw,40px)', display: 'flex', justifyContent: 'center' }}>
          <video src={b.src} poster={b.poster} controls muted playsInline preload="none" aria-label={b.caption} style={{ width: '100%', display: 'block', borderRadius: 4, background: '#000' }} />
        </div>
        <figcaption style={{ ...paMono, marginTop: 12 }}>{b.caption}</figcaption>
      </Reveal>
    );
    if (b.t === 'figs') return (
      <Reveal key={i} as="figure" style={{ margin: '32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 12 }}>
          {b.srcs.map((s) => <div key={s} onClick={() => zoom(s)} style={{ background: pa.well, borderRadius: 6, padding: 'clamp(12px,2vw,16px)', cursor: 'zoom-in' }}><img src={s} alt="" style={{ width: '100%', display: 'block' }} /></div>)}
        </div>
        <figcaption style={{ ...paMono, marginTop: 12 }}>{b.caption}{narrow && ' · tap to enlarge'}</figcaption>
      </Reveal>
    );
    if (b.t === 'sub') return (
      <Reveal key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: narrow ? 24 : 32, alignItems: 'center', background: paTile(b), borderRadius: 8, padding: 'clamp(20px,3vw,40px)', margin: '24px 0' }}>
        <div style={{ minWidth: 0 }}>
          {b.logo ? <img src={b.logo} alt={b.title} style={{ height: 40, display: 'block' }} /> : <h3 style={{ fontFamily: pa.serif, fontWeight: 400, fontSize: 'clamp(27px,4vw,34px)', margin: 0, letterSpacing: '-.015em' }}>{b.title}</h3>}
          <div style={{ ...paMono, marginTop: 12 }}>{b.year}</div>
          <p style={{ fontFamily: pa.sans, fontSize: 17, lineHeight: 1.6, color: pa.body, margin: '18px 0 0' }}>{b.text}</p>
          {b.link && <div style={{ marginTop: 18, fontFamily: pa.sans, fontSize: 15 }}><PaLink href={b.link.href} ext>{b.link.label}</PaLink></div>}
        </div>
        <img src={b.image} alt="" onClick={() => zoom(b.image)} style={{ width: '100%', display: 'block', cursor: 'zoom-in' }} />
      </Reveal>
    );
    return null;
  };
  return (
    <main>
      <section style={{ ...paWrap, paddingTop: 'clamp(40px,8vw,96px)' }}>
        <FadeIn style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <PaLink href="/" onClick={(e) => { e.preventDefault(); go('', 'work'); }} style={{ fontFamily: pa.sans, fontSize: 14 }}>← All work</PaLink>
          <span style={paMono}>0{idx + 1} / 0{P.projects.length} · {p.year}</span>
        </FadeIn>
        <h1 style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(46px, 10vw, 140px)', lineHeight: .98, letterSpacing: '-.035em', margin: 'clamp(28px,6vw,48px) 0 0', overflowWrap: 'break-word' }}>
          <SplitWords text={p.caseTitle || p.title} delay={0.05} stagger={0.07} />
        </h1>
        <FadeIn delay={0.3} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(24px,5vw,72px)', marginTop: 40, alignItems: narrow ? 'start' : 'end' }}>
          <p style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(21px,2.4vw,30px)', lineHeight: 1.32, margin: 0, textWrap: 'pretty' }}>{p.summary}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: narrow ? 14 : 10, fontFamily: pa.sans, fontSize: 15, alignItems: 'flex-start' }}>
            {p.links.map((l) => <PaLink key={l.label} href={l.href} ext>{l.label}</PaLink>)}
          </div>
        </FadeIn>
        <FadeIn delay={0.45} y={20}>
          <div onClick={() => zoom(p.image)} style={{ marginTop: 'clamp(32px,6vw,56px)', background: paTile(p), borderRadius: 8, padding: 'clamp(16px,5vw,72px)', display: 'flex', justifyContent: 'center', cursor: 'zoom-in' }}>
            <img src={p.image} alt={p.title} style={{ width: '100%', maxWidth: 820, display: 'block' }} />
          </div>
        </FadeIn>
      </section>
      <section style={{ ...paWrap, paddingTop: 40, paddingBottom: 80 }}>{p.blocks.map(block)}</section>
      <a href={'/' + next.slug} onClick={(e) => { e.preventDefault(); go(next.slug); }} {...nhp} style={{ display: 'block', background: paTile(next, nh), color: pa.ink, textDecoration: 'none', transition: `background .5s ${motionEase}` }}>
        <div style={{ ...paWrap, padding: 'clamp(48px,8vw,96px) clamp(20px,4vw,48px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ minWidth: 0 }}>
            <div style={paMono}>Next project</div>
            <div style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(38px,7vw,96px)', lineHeight: 1.02, letterSpacing: '-.03em', marginTop: 16, overflowWrap: 'break-word' }}>{next.title}</div>
          </div>
          <span style={{ fontFamily: pa.serif, fontSize: 'clamp(36px,6vw,80px)', lineHeight: 1, transform: nh ? 'translateX(10px)' : 'none', transition: `transform .5s ${motionEase}` }}>→</span>
        </div>
      </a>
    </main>
  );
}

function PaFooter() {
  const P = PORTFOLIO;
  return (
    <footer style={{ ...paWrap, padding: 'clamp(72px,10vw,96px) clamp(20px,4vw,48px) 40px' }}>
      <Reveal>
        <div style={paMono}>Get in touch</div>
        <PaLink href={'mailto:' + P.email} style={{ fontFamily: pa.serif, fontWeight: 300, fontSize: 'clamp(28px, 6.4vw, 88px)', letterSpacing: '-.03em', marginTop: 16, lineHeight: 1.08, wordBreak: 'break-word', maxWidth: '100%' }}>{P.email}</PaLink>
      </Reveal>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginTop: 'clamp(48px,8vw,72px)', paddingTop: 20, borderTop: `1px solid ${pa.rule}`, ...paMono }}>
        <span>© {new Date().getFullYear()} {P.name}</span>
      </div>
    </footer>
  );
}

function PaLightbox({ src, onClose }) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => { if (src) requestAnimationFrame(() => setOn(true)); else setOn(false); }, [src]);
  // Freeze the page behind the overlay and let Escape close it.
  useScrollLock(!!src);
  React.useEffect(() => {
    if (!src) return;
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [src, onClose]);
  if (!src) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(20,18,16,.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '72px 12px 24px', cursor: 'zoom-out', opacity: on ? 1 : 0, transition: 'opacity .3s' }}>
      <img src={src} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transform: on ? 'none' : 'scale(.98)', transition: `transform .4s ${motionEase}` }} />
      <button type="button" onClick={onClose} aria-label="Close image"
        style={{ ...paMono, appearance: 'none', background: 'none', border: 0, color: pa.ink, position: 'absolute', top: 14, right: 12, minWidth: 44, minHeight: 44, padding: '0 10px', cursor: 'pointer' }}>Close ✕</button>
    </div>
  );
}

export { PaNav, PaHome, PaCase, PaFooter, PaLightbox, pa };
