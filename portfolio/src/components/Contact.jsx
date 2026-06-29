import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Clock } from 'lucide-react';
import FadeIn from './FadeIn';

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'jawadaadil.webdev@gmail.com',
    href: 'mailto:jawadaadil.webdev@gmail.com',
    color: '#38BDF8',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/jawadaadilwebdev',
    href: 'https://github.com/jawadaadilwebdev',
    color: '#818CF8',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jawadaadilwebdev/',
    href: 'https://www.linkedin.com/in/jawadaadilwebdev/',
    color: '#34D399',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch('https://formspree.io/f/mbdvybvw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });
    if (res.ok) {
      setSent(true);
    } else {
      alert('Something went wrong. Please email me directly.');
    }
  } catch (err) {
    alert('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn className="mb-16">
          <div className="section-label">Contact</div>
          <h2 className="section-heading">
            Let's <span className="text-gradient">work together</span>
          </h2>
          <p className="section-subheading">
            Open to internships, collaborations, and meaningful conversations about building things.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Info */}
          <FadeIn delay={0.1} direction="left">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-7 border border-border">
                <h3 className="font-bold text-text-base text-xl mb-2">Ready to build something?</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  I'm currently looking for internship opportunities where I can contribute to a real team,
                  learn from experienced engineers, and ship features that people use. If that sounds like
                  a fit — let's talk.
                </p>

                <div className="flex items-center gap-2 mt-4 py-3 px-4 rounded-xl bg-primary-glow border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-sm text-text-base font-medium">
                    Available for internships starting immediately
                  </span>
                </div>
              </div>

              {/* Contact links */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="glass rounded-xl p-4 border border-border card-hover flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ color: item.color, background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-text-faint uppercase tracking-wider">{item.label}</div>
                      <div className="text-sm font-medium text-text-base">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location/availability hints */}
              <div className="glass rounded-xl p-4 border border-border flex items-center gap-3">
                <Clock size={16} className="text-text-faint flex-shrink-0" />
                <span className="text-sm text-text-muted">Usually responds within 24 hours</span>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={0.2} direction="right">
            <div className="glass rounded-2xl p-8 border border-border">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="text-5xl animate-bounce">🎉</div>
                  <h3 className="font-bold text-text-base text-xl">Message sent!</h3>
                  <p className="text-text-muted text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => { setSent(false); setFormState({ name: '', email: '', message: '' }); }}
                    className="btn-outline mt-2"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5" htmlFor="name">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-text-base placeholder-text-faint text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5" htmlFor="email">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-text-base placeholder-text-faint text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-border text-text-base placeholder-text-faint text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
