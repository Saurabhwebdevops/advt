import { useState } from 'react';
import useReveal from './hooks/useReveal';
import { reduceMotion } from './utils';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Finder from './components/Finder';
import Services from './components/Services';
import Process from './components/Process';
import JobBoard from './components/JobBoard';
import Why from './components/Why';
import Faq from './components/Faq';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  const [prefill, setPrefill] = useState(null);
  useReveal();

  /* "Book this repair" in the fault finder fills the form and scrolls to it. */
  const book = (p) => {
    setPrefill({ ...p, n: Date.now() });
    const el = document.getElementById('book');
    if (el) el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' });
  };

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Finder onBook={book} />
        <Services />
        <Process />
        <JobBoard />
        <Why />
        <Faq />
        <Booking prefill={prefill} />
      </main>
      <Footer />
    </>
  );
}
