import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import { projects } from '../data.js';

export default function Projects() {
  const track = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });
  const a = useReveal(), b = useReveal(), c = useReveal();

  const down = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { down: true, x: e.clientX, left: track.current.scrollLeft, moved: false };
    track.current.classList.add('grabbing');
  };
  const move = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    track.current.scrollLeft = drag.current.left - dx;
  };
  const up = () => {
    drag.current.down = false;
    track.current?.classList.remove('grabbing');
  };
  // Click anywhere on a card opens the project (live demo, else GitHub).
  // A drag is not a click, and the inner links keep their own behaviour.
  const open = (p, e) => {
    if (drag.current.moved) { drag.current.moved = false; return; }
    if (e.target.closest('a')) return;
    const url = p.live || p.github;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };
  const scroll = (d) => track.current.scrollBy({ left: d * 480, behavior: 'smooth' });

  return (
    <section id="projects" className="full">
      <div className="w">
        <div className="lab rv" ref={a}>03 — Selected work</div>
        <div className="ph rv" ref={b}>
          <h2>Recent <em>projects</em>— drag to explore.</h2>
          <div className="ar">
            <button aria-label="Previous project" onClick={() => scroll(-1)}>←</button>
            <button aria-label="Next project" onClick={() => scroll(1)}>→</button>
          </div>
        </div>
      </div>
      <div className="dr rv" ref={(el) => { track.current = el; c.current = el; }} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}>
        {projects.map((p, i) => (
          <article
            className={`pc${p.live || p.github ? ' lk' : ''}`}
            key={p.title}
            style={{ '--c': p.color, '--g': p.glow }}
            onClick={(e) => open(p, e)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.target.closest('a')) open(p, e); }}
            tabIndex={p.live || p.github ? 0 : undefined}
            role={p.live || p.github ? 'link' : undefined}
            aria-label={p.live || p.github ? `Open ${p.title}` : undefined}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="top">
              <span className="tag">{String(i + 1).padStart(2, '0')} / Project</span>
              {p.live && <a className="ex" href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title} live demo`}>↗</a>}
              <h3>{p.title}</h3>
            </div>
            <div className="bd">
              <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="chips">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer"><span>GitHub ↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}