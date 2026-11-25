# Mahnoor Zahoor | Portfolio (React + Vite)

Dark, animated, fully responsive portfolio. Sirf frontend hai: na backend, na database.

## Chalane ka tareeqa
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # deploy ke liye "dist" folder banata hai
```
Node.js 18+ chahiye.

## Apni cheezein badalna
- Text, skills, projects, links: `src/data.js`
- Colours aur fonts: `src/index.css` (variables `:root` mein)
- Apni photo: `public/me.jpg` mein rakhein aur `src/components/MagCard.jsx` mein `PHOTO = '/me.jpg'` kar dein

## Contact form
- Bina kisi setup ke: "Send message" dabane par aap ki email app khulti hai, message pehle se likha hua.
- Seedha inbox mein messages chahiye to https://formspree.io par free form banayein, aur project ke folder mein `.env` file banayein:
  ```
  VITE_FORMSPREE_ID=aap_ka_form_id
  ```

## Deploy (free)
1. Project GitHub par daalein.
2. Vercel ya Netlify par "Import project" karein. Build command `npm run build`, output folder `dist`.
