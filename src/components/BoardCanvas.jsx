import { useEffect, useRef } from 'react';
import { reduceMotion } from '../utils';

/* Seeded random so the board layout is the same on every load. */
function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DIRS = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

/** Animated circuit-board trace field with signal pulses. Pointer movement sends extra pulses. */
export default function BoardCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext('2d');
    const parent = cv.parentElement;
    const reduce = reduceMotion();
    const cell = 28;
    let w = 0, h = 0, dpr = 1, raf = 0, last = 0, visible = true, lastMove = 0;
    let traces = [], pulses = [];
    let col = { line: '#999', signal: '#0c8', accent: '#c80' };

    function readColors() {
      const cs = getComputedStyle(document.documentElement);
      col = {
        line: cs.getPropertyValue('--trace').trim() || '#999',
        signal: cs.getPropertyValue('--signal').trim() || '#0c8',
        accent: cs.getPropertyValue('--accent').trim() || '#c80',
      };
    }

    function build() {
      const r = rng(11);
      const cols = Math.ceil(w / cell);
      const rows = Math.ceil(h / cell);
      traces = [];
      const n = Math.max(8, Math.round((cols * rows) / 42));
      for (let i = 0; i < n; i++) {
        let gx = Math.floor(r() * cols);
        let gy = Math.floor(r() * rows);
        let d = Math.floor(r() * 8);
        const pts = [[gx * cell, gy * cell]];
        const segs = 3 + Math.floor(r() * 5);
        for (let s = 0; s < segs; s++) {
          const len = 2 + Math.floor(r() * 7);
          d = (d + [-1, 0, 0, 1][Math.floor(r() * 4)] + 8) % 8;
          gx += DIRS[d][0] * len;
          gy += DIRS[d][1] * len;
          pts.push([gx * cell, gy * cell]);
        }
        const lens = [], cum = [0];
        let total = 0;
        for (let k = 1; k < pts.length; k++) {
          const l = Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]);
          lens.push(l);
          total += l;
          cum.push(total);
        }
        traces.push({ pts, lens, cum, total });
      }
      pulses = [];
      if (!reduce) {
        const r2 = rng(5);
        traces.forEach((t, i) => {
          if (r2() < 0.4) pulses.push({ t: i, d: r2() * t.total, v: 80 + r2() * 130, c: r2() < 0.72 ? 'signal' : 'accent', temp: false });
        });
      }
    }

    function pointAt(t, d) {
      let i = 0;
      while (i < t.lens.length - 1 && d > t.lens[i]) {
        d -= t.lens[i];
        i++;
      }
      const a = t.pts[i], b = t.pts[i + 1];
      const f = Math.max(0, Math.min(1, d / t.lens[i]));
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
    }

    function draw(dt) {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.5;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.strokeStyle = col.line;
      for (const t of traces) {
        ctx.beginPath();
        ctx.moveTo(t.pts[0][0], t.pts[0][1]);
        for (let i = 1; i < t.pts.length; i++) ctx.lineTo(t.pts[i][0], t.pts[i][1]);
        ctx.stroke();
        for (const k of [0, t.pts.length - 1]) {
          ctx.beginPath();
          ctx.arc(t.pts[k][0], t.pts[k][1], 3.5, 0, 6.283);
          ctx.stroke();
        }
      }
      for (const p of pulses) {
        const t = traces[p.t];
        p.d += p.v * dt;
        if (p.d > t.total) {
          if (p.temp) { p.dead = true; continue; }
          p.d = 0;
        }
        const c = col[p.c];
        for (let k = 0; k < 10; k++) {
          const dd = p.d - k * 6;
          if (dd < 0) break;
          const q = pointAt(t, dd);
          ctx.globalAlpha = (1 - k / 10) * 0.95;
          ctx.fillStyle = c;
          if (k === 0) { ctx.shadowColor = c; ctx.shadowBlur = 14; } else { ctx.shadowBlur = 0; }
          ctx.beginPath();
          ctx.arc(q[0], q[1], 3.4 - k * 0.24, 0, 6.283);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;
      if (pulses.some((p) => p.dead)) pulses = pulses.filter((p) => !p.dead);
    }

    function size() {
      const r = parent.getBoundingClientRect();
      w = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readColors();
      build();
      draw(0);
    }

    function frame(ts) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const dt = Math.min(0.05, (ts - last) / 1000 || 0);
      last = ts;
      draw(dt);
    }

    function onMove(e) {
      if (reduce) return;
      const now = performance.now();
      if (now - lastMove < 140) return;
      lastMove = now;
      const r = parent.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      let best = null, bd = 170;
      traces.forEach((t, ti) =>
        t.pts.forEach((p, pi) => {
          const dd = Math.hypot(p[0] - x, p[1] - y);
          if (dd < bd) { bd = dd; best = { t: ti, d: t.cum[pi] }; }
        })
      );
      if (best && pulses.length < 80) pulses.push({ t: best.t, d: best.d, v: 300, c: 'accent', temp: true });
    }

    const ro = new ResizeObserver(size);
    ro.observe(parent);
    const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; });
    io.observe(parent);
    const mo = new MutationObserver(() => { readColors(); if (reduce) draw(0); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMq = () => { readColors(); if (reduce) draw(0); };
    mq.addEventListener('change', onMq);
    parent.addEventListener('pointermove', onMove);
    size();
    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      mq.removeEventListener('change', onMq);
      parent.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={ref} className="board" aria-hidden="true" />;
}
