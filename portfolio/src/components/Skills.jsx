import { useState } from 'react';
import { skillCategories } from '../data/skills';
import FadeIn from './FadeIn';

function SkillBar({ name, level, color, delay }) {
  return (
    <div className="group" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-muted group-hover:text-text-base transition-colors">{name}</span>
        <span className="text-xs font-semibold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn className="mb-16">
          <div className="section-label">Skills</div>
          <h2 className="section-heading">
            My <span className="text-gradient">technical stack</span>
          </h2>
          <p className="section-subheading">
            Tools and technologies I use to bring ideas to life — from design to deployment.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIndex) => (
            <FadeIn key={cat.category} delay={catIndex * 0.1}>
              <div
                className={`glass rounded-2xl p-6 border card-hover cursor-pointer h-full transition-all duration-300 ${
                  activeCategory === cat.category ? 'border-opacity-80' : 'border-border'
                }`}
                style={{
                  borderColor: activeCategory === cat.category ? `${cat.color}40` : undefined,
                  boxShadow: activeCategory === cat.category ? `0 0 30px ${cat.color}15` : undefined,
                }}
                onMouseEnter={() => setActiveCategory(cat.category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-text-base text-sm">{cat.category}</div>
                    <div className="text-text-faint text-xs">{cat.skills.length} skills</div>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech cloud */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="glass rounded-2xl p-8 border border-border text-center">
            <p className="text-text-faint text-xs uppercase tracking-widest mb-5">Also comfortable with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['REST APIs', 'Responsive Design', 'UI/UX Prototyping', 'Deployment (Vercel/Netlify)', 'Chrome DevTools', 'npm/yarn', 'Postman'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-sm text-text-muted border border-border hover:border-primary/40 hover:text-text-base transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
