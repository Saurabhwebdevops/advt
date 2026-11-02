import { useEffect, useRef, useState } from 'react';
import { DEVICE_OPTIONS, VISIT_OPTIONS } from '../data';
import { Arrow } from './Icons';

const BLANK = { name: '', phone: '', device: 'AC', model: '', area: '', visit: 'Home visit', fault: '' };

/**
 * Booking form. It prepares a ticket on the page; nothing is sent anywhere.
 * To receive bookings, replace the body of submit() with a call to your API,
 * a form service, or a WhatsApp / email link.
 */
export default function Booking({ prefill }) {
  const [f, setF] = useState(BLANK);
  const [err, setErr] = useState({});
  const [ticket, setTicket] = useState(null);
  const [copied, setCopied] = useState('');
  const preRef = useRef(null);

  useEffect(() => {
    if (!prefill) return;
    setF((x) => ({ ...x, device: prefill.device, fault: prefill.fault }));
    setTicket(null);
    setErr({});
  }, [prefill]);

  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = 'Enter your name.';
    if (f.phone.replace(/\D/g, '').length < 10) er.phone = 'Enter a 10 digit mobile number.';
    if (f.visit === 'Home visit' && f.area.trim().length < 3) er.area = 'Enter your area so we can confirm a visit.';
    if (!f.fault.trim()) er.fault = 'Describe what is wrong, even briefly.';
    setErr(er);
    if (Object.keys(er).length) return;

    const ref = 'VM-' + String(Math.floor(10000 + Math.random() * 90000));
    const lines = [
      'Ticket ' + ref,
      'Name: ' + f.name.trim(),
      'Phone: ' + f.phone.trim(),
      'Appliance: ' + f.device + (f.model.trim() ? ', ' + f.model.trim() : ''),
      'Fault: ' + f.fault.trim(),
      'Service: ' + f.visit,
    ];
    if (f.area.trim()) lines.push('Area: ' + f.area.trim());
    lines.push('Drafted: ' + new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
    setTicket({ ref, text: lines.join('\n') });
    setCopied('');
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(ticket.text);
      setCopied('Copied.');
    } catch {
      try {
        const r = document.createRange();
        r.selectNodeContents(preRef.current);
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
      } catch { /* ignore */ }
      setCopied('Text selected. Copy it with your keyboard.');
    }
  }

  return (
    <section className="sec book" id="book">
      <div className="in">
        <div className="b-grid">
          <div>
            <div className="eyebrow">Book a repair</div>
            <h2>Tell us what stopped working</h2>
            <p className="lead">Fill in the form to prepare your ticket. Call us with the reference to confirm a visit, or quote it at the shop counter.</p>
            <div className="tips">
              <div><b>01</b><span>If it smells of burning or trips the MCB, switch it off and unplug it at the wall.</span></div>
              <div><b>02</b><span>Keep the model and serial number handy. The sticker is usually on the back or inside the door.</span></div>
              <div><b>03</b><span>Note any error code on the display. It speeds up diagnosis.</span></div>
            </div>
          </div>

          <div className="form rv">
            {ticket ? (
              <div className="ticket">
                <span className="stamp">Ticket prepared on this page</span>
                <div>
                  <small className="note">Your reference</small>
                  <div className="ref">{ticket.ref}</div>
                </div>
                <pre ref={preRef}>{ticket.text}</pre>
                <p className="note">Nothing has been sent from this page. Call or visit with the reference above to confirm the booking.</p>
                <div className="cta-row" style={{ marginTop: 0 }}>
                  <button className="btn btn-primary" onClick={copy}>Copy ticket</button>
                  <button className="btn btn-ghost" onClick={() => { setTicket(null); setF(BLANK); }}>Prepare another</button>
                </div>
                {copied && <p className="note" role="status">{copied}</p>}
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div style={{ display: 'grid', gap: 18 }}>
                  <div className="row2">
                    <div className="fld">
                      <label htmlFor="f-name">Name</label>
                      <input id="f-name" autoComplete="name" value={f.name} onChange={set('name')} />
                      {err.name && <span className="err">{err.name}</span>}
                    </div>
                    <div className="fld">
                      <label htmlFor="f-phone">Mobile number</label>
                      <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} />
                      {err.phone && <span className="err">{err.phone}</span>}
                    </div>
                  </div>
                  <div className="row2">
                    <div className="fld">
                      <label htmlFor="f-device">Appliance</label>
                      <select id="f-device" value={f.device} onChange={set('device')}>
                        {DEVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="fld">
                      <label htmlFor="f-model">Brand and model</label>
                      <input id="f-model" value={f.model} onChange={set('model')} />
                    </div>
                  </div>
                  <div className="row2">
                    <div className="fld">
                      <label htmlFor="f-visit">Service</label>
                      <select id="f-visit" value={f.visit} onChange={set('visit')}>
                        {VISIT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="fld">
                      <label htmlFor="f-area">Area or locality</label>
                      <input id="f-area" autoComplete="address-level2" value={f.area} onChange={set('area')} />
                      {err.area && <span className="err">{err.area}</span>}
                    </div>
                  </div>
                  <div className="fld">
                    <label htmlFor="f-fault">What is wrong?</label>
                    <textarea id="f-fault" value={f.fault} onChange={set('fault')} />
                    {err.fault && <span className="err">{err.fault}</span>}
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit">Prepare my ticket <Arrow /></button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
