import { SHOP } from '../data';
import { Logo } from './Icons';

export default function Footer() {
  return (
    <footer>
      <div className="in">
        <div className="f-grid">
          <div>
            <a className="brand" href="#top" style={{ marginBottom: 14 }}><Logo />{SHOP.name}</a>
            <p>Repair for home appliances and electronics.</p>
          </div>
          <div>
            <small>Visit</small>
            <p><span className="sel">{SHOP.address}</span><span className="sel">{SHOP.hours}</span></p>
          </div>
          <div>
            <small>Contact</small>
            <p><span className="sel">{SHOP.phone}</span><span className="sel">{SHOP.email}</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
