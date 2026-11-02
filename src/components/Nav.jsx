import { useEffect, useState } from 'react';
import { SHOP } from '../data';
import { Logo } from './Icons';

function ThemeToggle() {
  const read = () => {
    const t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(read());
    const mo = new MutationObserver(() => setDark(read()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const f = () => setDark(read());
    mq.addEventListener('change', f);
    return () => {
      mo.disconnect();
      mq.removeEventListener('change', f);
    };
  }, []);

  return (
    <button
      className="icon-btn"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark')}
    >
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty('--sp', max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className="nav">
        <div className="in">
          <div className="nav-row">
            <a className="brand" href="#top" aria-label={SHOP.name + ' home'}>
              <Logo />
              {SHOP.name}
            </a>
            <nav className="links" aria-label="Sections">
              <a href="#diagnose">Fault finder</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#tracking">Tracking</a>
              <a href="#faq">FAQ</a>
            </nav>
            <div className="nav-cta">
              <ThemeToggle />
              <a className="btn btn-primary" href="#book">Book repair</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
