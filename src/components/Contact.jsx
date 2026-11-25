import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { links } from '../data.js';

// Optional: add your Formspree form id in a .env file as VITE_FORMSPREE_ID=xxxxxxx
// to receive messages straight in your inbox. Without it, the form opens your email app.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const a = useReveal(), b = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [busy, setBusy] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!FORM_ID) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
      window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
      return;
    }
    setBusy(true);
    setStatus({ type: '', text: '' });
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm({ name: '', email: '', message: '' });
      setStatus({ type: 'ok', text: 'Message sent. I’ll reply soon.' });
    } catch {
      setStatus({ type: 'err', text: 'Could not send. Please email me directly.' });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="tight">
      <div className="w">
        <div className="cta rv" ref={a}>
          <h2>Let’s <em>build</em> together.</h2>
          <p>I’m open to full-stack roles. Tell me about your team or project and I’ll reply soon.</p>
          <form className="form" onSubmit={submit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={change} required maxLength={80} aria-label="Your name" />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={change} required maxLength={120} aria-label="Your email" />
            <textarea name="message" placeholder="Your message" rows={4} value={form.message} onChange={change} required maxLength={2000} aria-label="Your message" />
            <button className="btn p" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send message'}</button>
            {status.text && <div className={`status ${status.type}`} role="status">{status.text}</div>}
          </form>
          <div className="btns center">
            <a className="btn" href={`mailto:${links.email}`}>Email me</a>
            <a className="btn" href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="ci rv" ref={b}>
          <a href={`mailto:${links.email}`}><b>Email</b>{links.email}</a>
          <a href="tel:+923319583760"><b>Phone</b>{links.phone}</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><b>LinkedIn</b>mahnoor-zahoor</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer"><b>GitHub</b>Mahnoor-tech17</a>
          <div><b>Location</b>Rawalpindi, Pakistan</div>
        </div>
      </div>
    </section>
  );
}
