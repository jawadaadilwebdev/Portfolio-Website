import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';

const floatingBadges = [
  { label: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.1)', delay: '0s', pos: 'top-8 right-4' },
  { label: 'Node.js', color: '#68A063', bg: 'rgba(104,160,99,0.1)', delay: '1.5s', pos: 'top-32 -right-2' },
  { label: 'MongoDB', color: '#4DB33D', bg: 'rgba(77,179,61,0.1)', delay: '3s', pos: 'bottom-32 right-0' },
  { label: 'Tailwind', color: '#38BDF8', bg: 'rgba(56,189,248,0.1)', delay: '0.8s', pos: 'bottom-12 right-8' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-8 pointer-events-none animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 pointer-events-none animate-blob"
        style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.1) 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '4s' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="order-2 lg:order-1">
            <div className="section-label animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for internships and junior roles
            </div>

            <p
              className="text-text-muted text-lg font-medium mb-2 animate-slide-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Hello, I'm
            </p>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4 animate-slide-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <span className="text-gradient">Jawad Aadil</span>
            </h1>

            <h2
              className="text-xl md:text-2xl font-semibold text-text-muted mb-6 animate-slide-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              Full Stack Web Developer
            </h2>

            <p
              className="text-text-muted leading-relaxed max-w-lg mb-8 text-base animate-slide-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              I build <span className="text-text-base font-medium">end-to-end web applications</span> — from
              pixel-perfect interfaces to scalable backend systems. Passionate about clean code,
              great UX, and shipping products that actually work.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 mb-10 animate-slide-up"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              <button onClick={scrollToProjects} className="btn-primary">
                View Projects
                <ArrowRight size={16} />
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                Contact Me
              </button>
              <a href="#" download className="btn-outline text-text-muted hover:text-primary hover:border-primary">
                Resume ↓
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: '0.8s', opacity: 0 }}
            >
              <span className="text-text-faint text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/jawadaadilwebdev"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jawadaadilwebdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/50 transition-all duration-200 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:jawadaadil.webdev@gmail.com
"
                  className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/50 transition-all duration-200 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Central avatar card */}
              <div className="absolute inset-0 rounded-3xl glass border border-border glow-blue flex flex-col items-center justify-center animate-float">
                {/* Avatar placeholder */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary/20 to-accent-dim/20 border border-primary/20 flex items-center justify-center mb-4">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-text-base text-lg">Your Name</div>
                  <div className="text-text-muted text-sm">Full Stack Developer</div>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">Open to work</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.pos} glass px-3 py-1.5 rounded-lg text-xs font-semibold border transition-transform`}
                  style={{
                    color: badge.color,
                    borderColor: `${badge.color}30`,
                    background: badge.bg,
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: badge.delay,
                  }}
                >
                  {badge.label}
                </div>
              ))}

              {/* Decorative ring */}
              <div
                className="absolute -inset-6 rounded-full border border-dashed border-border/40 animate-float-slow"
                style={{ animationDelay: '2s' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-faint hover:text-primary transition-colors group"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
