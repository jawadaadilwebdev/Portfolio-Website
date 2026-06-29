import FadeIn from './FadeIn';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Projects Built', icon: <Rocket size={18} /> },
  { value: '15+', label: 'Technologies', icon: <Code2 size={18} /> },
  { value: '500+', label: 'Hours Coding', icon: <Lightbulb size={18} /> },
  { value: '50+', label: 'GitHub Commits', icon: <Users size={18} /> },
];

const traits = [
  { label: 'Clean Code Advocate', color: '#38BDF8' },
  { label: 'Problem Solver', color: '#818CF8' },
  { label: 'Fast Learner', color: '#34D399' },
  { label: 'Collaborative', color: '#FB923C' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-surface/30 py-24 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <FadeIn className="mb-16">
          <div className="section-label">About</div>
          <h2 className="section-heading">
            Turning ideas into{' '}
            <span className="text-gradient">real products</span>
          </h2>
          <p className="section-subheading">
            A developer who cares about every pixel, every endpoint, and every user.
          </p>
        </FadeIn>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <FadeIn delay={0.1} direction="left">
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p>
                I'm a <span className="text-text-base font-semibold">full stack web developer</span> with a
                passion for building applications that solve real problems. My journey started with
                curiosity about how websites work — and turned into a deep love for crafting them end-to-end.
              </p>
              <p>
                I work across the entire stack: designing responsive interfaces with React and Tailwind on
                the frontend, building RESTful APIs with Node.js and Express on the backend, and managing
                data with MongoDB. I don't just write code — I think about{' '}
                <span className="text-text-base font-semibold">scalability, UX, and maintainability</span>{' '}
                at every step.
              </p>
              <p>
                What drives me is the moment an idea becomes a working product. I enjoy the challenge
                of breaking down complex problems, learning new tools fast, and shipping clean, production-quality
                code. I'm actively seeking an{' '}
                <span className="text-primary font-semibold">internship opportunity</span>{' '}
                where I can contribute real value and grow alongside an experienced team.
              </p>
            </div>

            {/* Trait badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {traits.map((t) => (
                <span
                  key={t.label}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}10` }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Right — Stats grid */}
          <FadeIn delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.1 * i} className="h-full">
                  <div className="glass rounded-2xl p-6 card-hover border border-border h-full flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary-glow border border-primary/20 flex items-center justify-center text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-black text-gradient">{stat.value}</div>
                      <div className="text-text-muted text-sm mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Quote card */}
            <FadeIn delay={0.4} className="mt-4">
              <div className="glass rounded-2xl p-5 border border-border/60">
                <p className="text-text-muted text-sm italic leading-relaxed">
                  "I believe great software is built at the intersection of technical precision and
                  human empathy — code that works and feels effortless to use."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent-dim" />
                  <span className="text-text-base text-sm font-medium">Jawad Aadil</span>
                </div>
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
