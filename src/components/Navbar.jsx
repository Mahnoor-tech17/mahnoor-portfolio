import { useState } from 'react';
import { links } from '../data.js';

const items = ['About', 'Skills', 'Projects', 'Education', 'FAQ', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav>
        <a className="logo" href="#top">Mahnoor<span>.</span></a>
        <ul className={open ? 'open' : ''}>
          {items.map((i) => (
            <li key={i}><a href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}>{i}</a></li>
          ))}
        </ul>
        <a className="wa" href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <button className="tg" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
