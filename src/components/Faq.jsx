import { useState } from 'react';
import { FAQ } from '../data';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec" id="faq" style={{ paddingTop: 0 }}>
      <div className="in">
        <div className="eyebrow">Questions</div>
        <h2>Before you book</h2>
        <div className="faq">
          {FAQ.map((q, i) => (
            <div key={q[0]} className={'q' + (open === i ? ' open' : '')}>
              <h3 style={{ fontSize: 'inherit' }}>
                <button aria-expanded={open === i} aria-controls={'ans' + i} id={'q' + i} onClick={() => setOpen(open === i ? -1 : i)}>
                  {q[0]}
                  <span className="plus" aria-hidden="true" />
                </button>
              </h3>
              <div className="ans" id={'ans' + i} role="region" aria-labelledby={'q' + i}>
                <div><p>{q[1]}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
