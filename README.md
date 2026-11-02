# Voltmend Repair Lab

React 18 + Vite website for a home appliance and electronics repair business.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

Needs Node 18 or newer.

## Make it yours

- `src/data.js` holds all the content: shop name, phone, address, appliances and faults, prices,
  services, process steps, tools, FAQ. Edit this first.
- `src/index.css` holds the design tokens at the top (colours, fonts) for light and dark themes.
- `index.html` has the page title and the Google Fonts link.

## Structure

```
src/
  App.jsx               page composition
  data.js               all content
  utils.js              rupee formatter, reduced-motion check
  hooks/useReveal.js    scroll reveal
  components/
    BoardCanvas.jsx     animated circuit-board hero background (canvas)
    Nav.jsx             sticky nav, theme toggle, scroll progress
    Hero.jsx            headline, service readout, promise strip
    Finder.jsx          appliance and symptom fault finder
    Services.jsx        service cards with hover animations
    Process.jsx         scroll-driven process line
    JobBoard.jsx        sample job tracking board
    Why.jsx             promises and technician toolkit
    Faq.jsx             accordion
    Booking.jsx         booking form that prepares a ticket
    Footer.jsx
```

## Before you launch

- Replace the placeholder phone, email and address in `SHOP` (`src/data.js`).
- Prices, repair times, the 90-day warranty, the visit-fee policy and the example job tickets are samples.
- The booking form only prepares a ticket on the page. To receive bookings, replace the body of
  `submit()` in `src/components/Booking.jsx` with a call to your backend, a form service, or a
  WhatsApp or email link.
- Animations switch off for visitors who prefer reduced motion.
