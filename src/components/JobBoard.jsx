import { useEffect, useState } from 'react';
import { TICKETS, STAGES, PILL } from '../data';
import { reduceMotion } from '../utils';

/** Sample job tracking board. Replace TICKETS in data.js, or feed it from your own API. */
export default function JobBoard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion()) return undefined;
    const id = setInterval(() => setTick((t) => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="sec" id="tracking">
      <div className="in">
        <div className="eyebrow">Job tracking</div>
        <h2>Track every job from booking to handover</h2>
        <p className="lead">Each appliance gets a ticket. This is a sample of how a day looks, with example jobs.</p>
        <div className="bboard rv" role="table" aria-label="Sample job board">
          <div className="bb-head" role="row">
            <span>Ticket</span><span>Device</span><span>Progress</span><span>Status</span>
          </div>
          {TICKETS.map((t) => {
            const s = Math.min(5, (tick + t.o) % 10);
            return (
              <div className="bb-row" role="row" key={t.id}>
                <span className="id">{t.id}</span>
                <div className="dev"><b>{t.dev}</b><span>{t.f}</span></div>
                <div className="bar notches" aria-hidden="true">
                  {STAGES.map((_, i) => (
                    <i key={i} className={i <= s ? (s === 5 ? 'ok' : 'f') : ''} />
                  ))}
                </div>
                <span className={'pill ' + PILL[s]}>{STAGES[s]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
