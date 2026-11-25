import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import MagCard from './MagCard.jsx';

function Count({ to }) {
  const [n, setN] = useState(0);
  const ref = useReveal();
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let k = 0;
      const id = setInterval(() => { k += 1; setN(k); if (k >= to) clearInterval(id); }, 280);
      io.disconnect();
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{n}</b>;
}

export default function About() {
  const r = useReveal();
  return (
    <section id="about">
      <div className="w ab">
        <MagCard />
        <div className="rv" ref={r}>
          <div className="lab">01 — About</div>
          <h2>Building full-stack products that <em>work end to end</em>.</h2>
          <p>I am a <b>MERN Stack Developer</b> with 1 year of experience and a BS in Information Technology from the University of the Punjab (2022–2026). I build responsive interfaces in React, secure APIs in Express and clean data models in MongoDB.</p>
          <p>My final year project, <b>PoseFit</b>, combined real-time posture detection with MediaPipe, an AI diet plan generator and a fitness chatbot, with JWT and Google OAuth authentication.</p>
          <div className="stats">
            <div><Count to={1} /><span>Year of experience</span></div>
            <div><Count to={3} /><span>Courses completed</span></div>
            <div><Count to={4} /><span>Years of BSIT</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
