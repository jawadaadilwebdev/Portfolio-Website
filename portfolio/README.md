# 🚀 Developer Portfolio

A premium, modern full-stack developer portfolio built with React, Tailwind CSS, and Vite.

## ✨ Features

- **Dark mode** with electric blue/purple accent palette
- **Apple-style minimalism** + Stripe-style gradients
- **Fully responsive** — mobile, tablet, desktop
- **Smooth animations** — scroll-triggered fade-ins, floating elements
- **9 sections** — Navbar, Hero, About, Skills, Services, Projects, Experience, Contact, Footer
- **Premium glassmorphism** cards with glow hover effects
- **Production-ready** component architecture

---

## 📁 Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Services.jsx
    │   ├── Projects.jsx
    │   ├── Experience.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   └── FadeIn.jsx        ← reusable scroll animation wrapper
    └── data/
        ├── projects.js
        └── skills.js
```

---

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js v18+ installed
- npm or yarn

### 2. Create a new Vite + React project (or use these files directly)

```bash
# Option A: Use these files directly
cd portfolio
npm install

# Option B: Scaffold fresh then copy src/ over
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

### 3. Install dependencies

```bash
npm install react-intersection-observer lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. Copy the config files
Replace/copy all provided config files:
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `index.html`
- `src/index.css`

### 5. Run the dev server

```bash
npm run dev
```

Visit: http://localhost:5173

### 6. Build for production

```bash
npm run build
npm run preview
```

---

## 🎨 Customization Checklist

Replace all placeholder values:

### Personal Info
- [ ] `YN` initials → your initials (Navbar.jsx, Footer.jsx)
- [ ] `Your Name` → your actual name (Hero.jsx, About.jsx, Footer.jsx)
- [ ] `your@email.com` → your email (Contact.jsx, Footer.jsx)
- [ ] `yourusername` in GitHub/LinkedIn links → your actual usernames

### Content
- [ ] Hero description paragraph (Hero.jsx)
- [ ] About section paragraphs (About.jsx)
- [ ] Stats numbers — projects, hours, contributions (About.jsx)
- [ ] Timeline dates and descriptions (Experience.jsx)
- [ ] Resume file: add `resume.pdf` to `/public/` and update href="#" in Navbar + Hero

### Projects
Edit `src/data/projects.js`:
- [ ] Project titles and descriptions
- [ ] Real GitHub repo URLs
- [ ] Real live demo URLs
- [ ] Tech stack arrays

### Skills
Edit `src/data/skills.js`:
- [ ] Adjust proficiency levels (0–100)
- [ ] Add/remove skills

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-intersection-observer": "^9.5.3",
  "lucide-react": "^0.383.0",
  "tailwindcss": "^3.4.1",
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.2.0",
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.35"
}
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag the `dist/` folder into netlify.com/drop
```

---

## 📄 License
MIT — use freely for your personal portfolio.
