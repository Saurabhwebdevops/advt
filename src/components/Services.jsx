import { SERVICES } from '../data';
import { ServiceIcon } from './Icons';

export default function Services() {
  /* Cursor-following glow: store the pointer position as CSS variables on the card. */
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px');
    e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px');
  };

  return (
    <section className="sec" id="services" style={{ paddingTop: 0 }}>
      <div className="in">
        <div className="eyebrow">Services</div>
        <h2>Everything in your home that plugs in</h2>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <article key={s.t} className="card rv" style={{ '--d': (i % 3) * 90 + 'ms' }} onPointerMove={move}>
              <span className="fid" aria-hidden="true" />
              <ServiceIcon name={s.ico} />
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="tags">{s.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
