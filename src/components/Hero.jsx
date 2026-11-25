import { useEffect, useState } from 'react';
import { roles } from '../data.js';

const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

function Letters({ text, offset }) {
  return (
    <span className="ln">
      {[...text].map((c, i) => (
        <span key={i} className="ch" aria-hidden="true" style={{ animationDelay: `${offset + i * 65}ms` }}>{c}</span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [text, setText] = useState(reduce ? roles[0] : '');

  useEffect(() => {
    if (reduce) return;
    let ri = 0, ci = 0, del = false, t;
    const tick = () => {
      const w = roles[ri];
      ci += del ? -1 : 1;
      setText(w.slice(0, ci));
      let d = del ? 35 : 70;
      if (!del && ci === w.length) { del = true; d = 1400; }
      else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 300; }
      t = setTimeout(tick, d);
    };
    t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w hero" id="top">
      <div className="meta"><span>Portfolio / 2026</span><span>Rawalpindi, Pakistan</span></div>
      <span className="pill"><i />Open to full-stack roles</span>
      <h1 aria-label="Mahnoor Zahoor"><Letters text="Mahnoor" offset={0} /><Letters text="Zahoor." offset={380} /></h1>
      <div className="role">{text}</div>
      <p className="lead">MERN stack developer building responsive React interfaces, secure Express APIs and MongoDB data models, with a growing focus on applied AI.</p>
      <div className="btns">
        <a className="btn p" href="#projects">See selected work</a>
        <a className="btn" href="#contact">Contact me</a>
        <a className="btn" href="https://github.com/Mahnoor-tech17" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}
