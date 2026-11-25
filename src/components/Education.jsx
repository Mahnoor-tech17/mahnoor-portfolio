import useReveal from '../hooks/useReveal.js';
import { education, courses } from '../data.js';

export default function Education() {
  const r = [useReveal(), useReveal(), useReveal(), useReveal(), useReveal(), useReveal()];
  return (
    <section id="education">
      <div className="w">
        <div className="lab rv" ref={r[0]}>04 — Education</div>
        <h2 className="rv" ref={r[1]}>Academic <em>background</em>.</h2>
        <div className="tl rv" ref={r[2]}>
          {education.map((e) => (
            <div className="it" key={e.title}><small>{e.when}</small><h3>{e.title}</h3><div>{e.where}</div></div>
          ))}
        </div>
        <div className="lab rv gap" ref={r[3]}>05 — Courses</div>
        <h2 className="rv" ref={r[4]}>Courses and <em>certifications</em>.</h2>
        <div className="cs rv" ref={r[5]}>
          {courses.map((c) => (
            <div className="c" key={c.title}><span className="tag">{c.kind}</span><h3>{c.title}</h3><p>{c.where}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
