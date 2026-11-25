import useReveal from '../hooks/useReveal.js';
import { skills } from '../data.js';

export default function Skills() {
  const a = useReveal(), b = useReveal(), c = useReveal();
  return (
    <section id="skills">
      <div className="w">
        <div className="lab rv" ref={a}>02 — Skills and stack</div>
        <h2 className="rv" ref={b}>Tools I reach for to ship <em>real</em> work.</h2>
        <div className="sk rv" ref={c}>
          {skills.map((s, i) => (
            <div className="g" key={s.title}>
              <span className="pn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <ul>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
