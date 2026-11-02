import { useState } from 'react';
import { DEVICES, ALSO } from '../data';
import { rupee } from '../utils';
import { Arrow } from './Icons';

export default function Finder({ onBook }) {
  const [dev, setDev] = useState('ac');
  const [fi, setFi] = useState(0);
  const d = DEVICES[dev];
  const f = d.faults[fi];

  return (
    <section className="sec" id="diagnose">
      <div className="in">
        <div className="eyebrow">Fault finder</div>
        <h2>What is your appliance doing?</h2>
        <p className="lead">Pick the appliance and the symptom. You get the likely cause, what we would do about it, and a typical time and price.</p>

        <div className="finder rv">
          <div className="f-left">
            <div className="tabs" role="tablist" aria-label="Appliance type">
              {Object.keys(DEVICES).map((k) => (
                <button key={k} role="tab" className="tab" aria-selected={dev === k} onClick={() => { setDev(k); setFi(0); }}>
                  {DEVICES[k].label}
                </button>
              ))}
            </div>
            <div className="faults" role="group" aria-label="Symptom">
              {d.faults.map((x, i) => (
                <button key={dev + i} className="fault" aria-pressed={fi === i} onClick={() => setFi(i)}>
                  <span>{x.l}</span><i>{'→'}</i>
                </button>
              ))}
            </div>
          </div>

          <div className="f-right" aria-live="polite">
            <div className="res" key={dev + fi}>
              <h3>{f.l}</h3>
              <div className="kv"><small>Likely cause</small><p>{f.cause}</p></div>
              <div className="kv"><small>What we do</small><p>{f.fix}</p></div>
              <div className="meta">
                <div className="kv"><small>Typical time</small><strong>{f.time}</strong></div>
                <div className="kv"><small>From</small><strong>{rupee(f.price)}</strong></div>
                <div className="kv">
                  <small>Complexity</small>
                  <div className="gauge" aria-label={'Complexity ' + f.level + ' of 5'}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i} className={'seg' + (i < f.level ? ' on' : '')} style={{ '--i': i }} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-primary" onClick={() => onBook({ device: d.label, fault: f.l })}>
                  Book this repair <Arrow />
                </button>
              </div>
              <p className="note">Sample prices. The final quote comes after the technician finds the fault.</p>
            </div>
          </div>
        </div>

        <p className="also rv">
          <span>Also repaired</span>
          {ALSO.map((a) => <span key={a}>{a}</span>)}
        </p>
      </div>
    </section>
  );
}
