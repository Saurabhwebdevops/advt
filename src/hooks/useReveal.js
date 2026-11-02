import { useEffect } from 'react';

/** Adds `in-view` to every `.rv` element the first time it scrolls into view. */
export default function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll('.rv')];
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in-view'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
