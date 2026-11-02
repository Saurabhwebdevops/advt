export const Logo = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="8" y="8" width="16" height="16" rx="2" />
    <path d="M12 4v4M16 4v4M20 4v4M12 24v4M16 24v4M20 24v4M4 12h4M4 16h4M4 20h4M24 12h4M24 16h4M24 20h4" />
    <path d="M13 17l2.2 2.2L19.5 13" />
  </svg>
);

export const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const SHAPES = {
  ac: (
    <>
      <rect x="4" y="8" width="32" height="14" rx="3" />
      <path d="M9 17h22" />
      <path className="air" d="M12 27c0 3 2 3 2 7M20 27c0 3 2 3 2 7M28 27c0 3 2 3 2 7" />
    </>
  ),
  fridge: (
    <>
      <rect x="10" y="3" width="20" height="34" rx="3" />
      <path d="M10 15h20" />
      <path d="M14 9v3M14 20v6" />
      <g className="flake"><path d="M22 23v8M18.5 25l7 4M25.5 25l-7 4" /></g>
    </>
  ),
  washer: (
    <>
      <rect x="6" y="4" width="28" height="32" rx="3" />
      <path d="M6 11h28" />
      <circle cx="12" cy="7.5" r="1" />
      <circle cx="20" cy="23" r="8.5" />
      <path className="drum" d="M14.5 23c1.5-2.5 3-2.5 5.5 0s4 2.5 5.5 0" />
    </>
  ),
  tv: (
    <>
      <rect x="4" y="6" width="32" height="22" rx="2" />
      <path d="M14 34h12M20 28v6" />
      <path className="scan" d="M8 11h24" />
    </>
  ),
  microwave: (
    <>
      <rect x="4" y="9" width="32" height="22" rx="3" />
      <rect x="8" y="13" width="17" height="14" rx="1.5" />
      <rect className="mw" x="8" y="13" width="17" height="14" rx="1.5" fill="currentColor" stroke="none" />
      <circle cx="30.5" cy="16" r="1.4" />
      <circle cx="30.5" cy="22" r="1.4" />
    </>
  ),
  chip: (
    <>
      <rect x="11" y="11" width="18" height="18" rx="2" />
      <path className="pin" d="M16 5v6M20 5v6M24 5v6M16 29v6M20 29v6M24 29v6M5 16h6M5 20h6M5 24h6M29 16h6M29 20h6M29 24h6" />
      <circle cx="16" cy="16" r="1.4" />
    </>
  ),
};

export function ServiceIcon({ name }) {
  return (
    <svg className="ico" viewBox="0 0 40 40" aria-hidden="true">
      {SHAPES[name]}
    </svg>
  );
}
