import { useEffect, useState } from 'react';
import BoardCanvas from './BoardCanvas';
import { Arrow } from './Icons';
import { SHOP } from '../data';
import { reduceMotion } from '../utils';

/* name, unit, base value, wobble, bar max, decimals */
const READOUT = [
  ['MAINS', 'V', 229, 3, 260, 0],
  ['COMPRESSOR', 'A', 4.6, 0.25, 10, 1],
  ['COIL_TEMP', '°C', 8.5, 0.6, 40, 1],
  ['GAS_PRESSURE', 'psi', 68, 2.5, 150, 0],
];

function Readout() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion()) return undefined;
    const id = setInterval(() => setTick((t) => t + 1), 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="readout" aria-label="Demo service readout">
      <div className="ro-head"><span>Service readout</span><span>Demo values</span></div>
      {READOUT.map((r, i) => {
        const v = r[2] + Math.sin(tick * 1.7 + i * 2.1) * r[3];
        return (
          <div className="ro-row" key={r[0]}>
            <span>{r[0]}</span>
            <b>{v.toFixed(r[5])} {r[1]}</b>
            <div className="ro-bar"><i style={{ width: Math.min(100, (v / r[4]) * 100) + '%' }} /></div>
          </div>
        );
      })}
      <div className="ro-foot"><span className="led" /><span>Cooling cycle: normal</span></div>
    </aside>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <BoardCanvas />
      <div className="in">
        <div className="hero-grid">
          <div>
            <div className="eyebrow"><span className="led" />Home appliance and electronics repair</div>
            <h1>
              <span className="line"><span>Broken today.</span></span>
              <span className="line"><span><em>Running</em> tonight.</span></span>
            </h1>
            <p className="lead">
              Repair for ACs, refrigerators, washing machines, TVs and the rest of your home appliances. Technicians come to your door with common parts. Every job is quoted before work starts and backed by a written warranty.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#book">Book a repair <Arrow /></a>
              <a className="btn btn-ghost" href="#diagnose">Find my fault</a>
            </div>
          </div>
          <Readout />
        </div>
      </div>
      <div className="in">
        <div className="strip">
          <div><small>Warranty</small><strong>{SHOP.warranty} days on every repair</strong><span>Written on your invoice.</span></div>
          <div><small>Quote</small><strong>Price before work starts</strong><span>You approve every rupee.</span></div>
          <div><small>Turnaround</small><strong>Same day or next-day visits</strong><span>Compressor and board work can take longer.</span></div>
        </div>
      </div>
    </section>
  );
}
