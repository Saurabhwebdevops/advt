import { useEffect, useRef, useState } from 'react';
import { STEPS } from '../data';

export default function Process() {
  const ref = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setP(Math.max(0, Math.min(1, (window.innerHeight * 0.62 - r.top) / r.height)));
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
    <section className="sec process" id="process">
      <div className="in">
        <div className="p-grid">
          <div className="p-stick">
            <div className="eyebrow">Process</div>
            <h2>From call to done in five steps</h2>
            <p className="lead">You always know what happens next. Nothing is replaced without your approval.</p>
          </div>
          <ol className="steps" ref={ref} style={{ '--p': p }}>
            {STEPS.map((s, i) => (
              <li key={s.h} className={'step' + (p >= (i + 0.2) / STEPS.length ? ' on' : '')}>
                <span className="dot">{i + 1}</span>
                <span className="t">{s.t}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
