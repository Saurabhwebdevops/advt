import { TOOLS } from '../data';
import { Check } from './Icons';

const ITEMS = [
  ['A written quote first', 'The fault, the fix, the part grade and the price, before anything is replaced.'],
  ['Common parts on the van', 'Fans, relays, capacitors, sensors and filters ride with the technician, so many repairs finish in one visit.'],
  ['Safe working practice', 'Power is isolated and capacitors are discharged before anything is opened, and gas work is done to the rated pressure.'],
  ['Warranty on the invoice', 'Written down with your ticket reference, so there is nothing to argue about later.'],
];

export default function Why() {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="in">
        <div className="why-grid">
          <div className="rv">
            <div className="eyebrow">How we work</div>
            <h2>We quote before we replace anything</h2>
            <ul className="promises">
              {ITEMS.map((i) => (
                <li key={i[0]}>
                  <Check />
                  <div><b>{i[0]}</b><span>{i[1]}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rv" style={{ '--d': '120ms' }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>In the toolkit</div>
            <div className="scroll-x" tabIndex={0} role="region" aria-label="Technician tools">
              <table>
                <thead><tr><th>Tool</th><th>What it finds</th></tr></thead>
                <tbody>
                  {TOOLS.map((t) => (
                    <tr key={t[0]}><td>{t[0]}</td><td>{t[1]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
