import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/jawadaadilwebdev', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/jawadaadilwebdev/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:jawadaadil.webdev@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent-dim flex items-center justify-center text-white font-bold text-sm">
                JA
              </div>
              <span className="font-bold text-text-base tracking-tight">
                Jawad<span className="text-primary">Aadil</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer. Building responsive, scalable web applications with clean code and great UX.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-xs text-text-faint uppercase tracking-widest mb-4">Navigation</div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + availability */}
          <div>
            <div className="text-xs text-text-faint uppercase tracking-widest mb-4">Connect</div>
            <div className="flex gap-3 mb-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl glass-light border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-primary-glow border border-primary/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-primary font-medium">Open to internships and junior roles</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-faint text-xs">
            © 2026 Jawad Aadil. All rights reserved.
          </p>
          <p className="text-text-faint text-xs flex items-center gap-1">
            Built with React & Tailwind CSS
            <Heart size={12} className="text-primary mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}
