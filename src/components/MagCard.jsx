import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

const svg = `<svg viewBox="0 0 400 533" preserveAspectRatio="xMidYMax slice" aria-label="Floating code windows glowing in lime light">
<defs>
<radialGradient id="glow" cx="50%" cy="64%" r="50%"><stop offset="0" stop-color="#c8f23c" stop-opacity=".42"/><stop offset=".55" stop-color="#7fa81a" stop-opacity=".12"/><stop offset="1" stop-color="#c8f23c" stop-opacity="0"/></radialGradient>
<linearGradient id="wn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0d1630"/><stop offset="1" stop-color="#050a16"/></linearGradient>
<filter id="bl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
</defs>
<rect width="400" height="533" fill="#02040a"/>
<rect width="400" height="533" fill="url(#glow)"/>
<g fill="none" stroke="#c8f23c" stroke-width="1">
<ellipse cx="200" cy="340" rx="170" ry="60" transform="rotate(-18 200 340)" opacity=".28"/>
<ellipse cx="200" cy="340" rx="130" ry="46" transform="rotate(14 200 340)" opacity=".22"/>
</g>
<circle cx="361.7" cy="287.5" r="4" fill="#c8f23c"/><circle cx="38.3" cy="392.5" r="3" fill="#38d9f5"/><circle cx="326" cy="371.5" r="3" fill="#f06bf0"/><circle cx="74" cy="308.5" r="3.5" fill="#c8f23c" opacity=".8"/>
<g class="fl" style="animation-delay:-2s">
<rect x="140" y="196" width="210" height="120" rx="12" fill="url(#wn)" stroke="#c8f23c" stroke-opacity=".3"/>
<rect x="140" y="196" width="210" height="22" rx="12" fill="#c8f23c" fill-opacity=".08"/>
<g fill="#fff" opacity=".22"><rect x="158" y="236" width="90" height="6" rx="3"/><rect x="170" y="252" width="120" height="6" rx="3"/><rect x="170" y="268" width="70" height="6" rx="3"/><rect x="158" y="284" width="100" height="6" rx="3"/></g>
</g>
<g class="fl">
<rect x="70" y="250" width="260" height="175" rx="14" fill="#c8f23c" opacity=".22" filter="url(#bl)"/>
<rect x="70" y="250" width="260" height="175" rx="14" fill="url(#wn)" stroke="#c8f23c" stroke-width="1.5"/>
<path d="M70 280H330" stroke="#c8f23c" stroke-opacity=".25"/>
<circle cx="92" cy="265" r="4" fill="#c8f23c"/><circle cx="108" cy="265" r="4" fill="#38d9f5"/><circle cx="124" cy="265" r="4" fill="#f06bf0"/>
<rect x="92" y="298" width="110" height="7" rx="3.5" fill="#c8f23c" opacity=".9"/>
<rect x="108" y="316" width="150" height="7" rx="3.5" fill="#fff" opacity=".55"/>
<rect x="108" y="334" width="90" height="7" rx="3.5" fill="#38d9f5" opacity=".85"/>
<rect x="92" y="352" width="140" height="7" rx="3.5" fill="#fff" opacity=".45"/>
<rect x="108" y="370" width="120" height="7" rx="3.5" fill="#f06bf0" opacity=".75"/>
<rect x="92" y="388" width="70" height="7" rx="3.5" fill="#c8f23c" opacity=".8"/>
</g>
<g class="fl" style="animation-delay:-4s">
<rect x="26" y="408" width="124" height="82" rx="14" fill="#060b18" stroke="#38d9f5" stroke-opacity=".6"/>
<text x="88" y="460" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="34" fill="#38d9f5">{ }</text>
<rect x="250" y="396" width="124" height="92" rx="14" fill="#060b18" stroke="#f06bf0" stroke-opacity=".6"/>
<text x="312" y="452" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="34" fill="#f06bf0">&lt;/&gt;</text>
<polygon points="300,372 300,410 310,401 318,418 325,414 317,398 330,396" fill="#c8f23c" stroke="#02040a" stroke-width="1.5"/>
</g>
<circle cx="64" cy="150" r="1.6" fill="#c8f23c" opacity=".6"/><circle cx="338" cy="168" r="1.4" fill="#c8f23c" opacity=".5"/><circle cx="300" cy="128" r="1.2" fill="#fff" opacity=".5"/><circle cx="108" cy="190" r="1.2" fill="#fff" opacity=".4"/><circle cx="360" cy="500" r="1.4" fill="#fff" opacity=".4"/>
</svg>`;

// The picture stays in this browser only. To make it permanent, put your image in
// client/public/me.jpg and set PHOTO below to '/me.jpg'.
const PHOTO = '';

export default function MagCard() {
  const [img, setImg] = useState(PHOTO);
  const ref = useReveal();
  const pick = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setImg(r.result);
    r.readAsDataURL(f);
  };
  return (
    <label className="mag rv" ref={ref} title="Click to use your own picture">
      {img ? <img src={img} alt="Mahnoor Zahoor" /> : (
        <>
          <span className="tt">Web<br />Developer</span>
          <span className="pm">PREMIUM MAGAZINE</span>
          <div className="svgwrap" dangerouslySetInnerHTML={{ __html: svg }} />
          <small>Click to use your own picture</small>
        </>
      )}
      <input type="file" accept="image/*" hidden onChange={pick} />
    </label>
  );
}
