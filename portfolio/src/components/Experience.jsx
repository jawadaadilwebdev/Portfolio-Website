import FadeIn from './FadeIn';

const timeline = [
  {
    period: '2023',
    title: 'Discovered Web Development',
    description: 'Built my first HTML page. Fell in love with the idea of creating things people can actually use. Started learning CSS, then JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: '🌱',
    color: '#38BDF8',
  },
  {
    period: '2023–24',
    title: 'Mastered JavaScript Fundamentals',
    description: 'Spent months deep-diving into JS: DOM manipulation, async programming, ES6+, and APIs. Built small projects to reinforce everything.',
    tags: ['JavaScript', 'DOM', 'Fetch API', 'ES6+'],
    icon: '⚡',
    color: '#F59E0B',
  },
  {
    period: '2024',
    title: 'Entered the React Ecosystem',
    description: 'Learned React, component architecture, hooks, and state management. Started building real SPAs and understanding the modern frontend landscape.',
    tags: ['React', 'Hooks', 'Component Design'],
    icon: '⚛️',
    color: '#61DAFB',
  },
  {
    period: '2024',
    title: 'Went Full Stack with Node.js',
    description: 'Added backend skills: Node.js, Express, REST API design, and MongoDB. Started connecting all the pieces to build complete web apps.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    icon: '🔧',
    color: '#818CF8',
  },
  {
    period: '2025',
    title: 'Built Production-Ready Projects',
    description: 'Developed full-stack applications — e-commerce, dashboards, chat apps. Focused on code quality, deployment, and real-world constraints.',
    tags: ['MERN Stack', 'Tailwind', 'Deployment', 'Git'],
    icon: '🚀',
    color: '#34D399',
  },
  {
    period: 'Now',
    title: 'Actively Seeking Internship and junior roles',
    description: 'Refining my skills, building in public, and looking for a team where I can grow fast, contribute meaningfully, and build things that matter.',
    tags: ['Open to Work', 'Full Stack', 'Internship'],
    icon: '🎯',
    color: '#FB923C',
    current: true,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/20 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn className="mb-16">
          <div className="section-label">Journey</div>
          <h2 className="section-heading">
            How I got <span className="text-gradient">here</span>
          </h2>
          <p className="section-subheading">
            Every developer has a story. Mine started with a blank HTML file and a lot of curiosity.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => {
              const isRight = i % 2 !== 0;
              return (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div
                      className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-background z-10 mt-1.5"
                      style={{
                        background: item.color,
                        boxShadow: item.current ? `0 0 16px ${item.color}80` : `0 0 8px ${item.color}40`,
                      }}
                    >
                      {item.current && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping opacity-60"
                          style={{ background: item.color }}
                        />
                      )}
                    </div>

                    {/* Content card */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isRight ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div
                        className={`glass rounded-2xl p-6 border card-hover ${item.current ? 'border-orange-500/30' : 'border-border'}`}
                        style={item.current ? { boxShadow: '0 0 20px rgba(251,146,60,0.1)' } : {}}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <div
                              className="text-xs font-bold uppercase tracking-widest"
                              style={{ color: item.color }}
                            >
                              {item.period}
                            </div>
                            <h3 className="font-bold text-text-base text-base">{item.title}</h3>
                          </div>
                        </div>

                        <p className="text-text-muted text-sm leading-relaxed mb-4">{item.description}</p>

                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-xs border"
                              style={{
                                color: item.color,
                                borderColor: `${item.color}20`,
                                background: `${item.color}10`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
