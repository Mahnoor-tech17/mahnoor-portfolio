import useReveal from '../hooks/useReveal.js';
import { faq } from '../data.js';

export default function Faq() {
  const a = useReveal(), b = useReveal(), c = useReveal();
  return (
    <section id="faq">
      <div className="w">
        <div className="lab rv" ref={a}>06 — FAQ</div>
        <h2 className="rv" ref={b}>Frequently asked <em>questions</em>.</h2>
        <div className="rv faq" ref={c}>
          {faq.map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
