import FadeIn from './FadeIn';
import { Monitor, Server, Layers, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={24} />,
    title: 'Frontend Development',
    description: 'Crafting pixel-perfect, responsive interfaces that feel fast and look premium. From landing pages to full SPAs using React and Tailwind.',
    bullets: ['React & Tailwind CSS', 'Responsive design', 'Smooth animations', 'Cross-browser compatibility'],
    color: '#38BDF8',
    gradient: 'from-blue-500/5 to-cyan-500/5',
  },
  {
    icon: <Server size={24} />,
    title: 'Backend Development',
    description: 'Building reliable, well-structured APIs and server-side logic with Node.js and Express. Clean architecture, proper error handling.',
    bullets: ['Node.js & Express.js', 'RESTful API design', 'Authentication (JWT)', 'Error handling & logging'],
    color: '#818CF8',
    gradient: 'from-purple-500/5 to-indigo-500/5',
  },
  {
    icon: <Layers size={24} />,
    title: 'Full Stack Web Apps',
    description: 'End-to-end product development — from database schema to the final UI. I connect all the layers into one cohesive, working product.',
    bullets: ['MERN stack', 'MongoDB & Mongoose', 'State management', 'Deployment (Vercel / Railway)'],
    color: '#34D399',
    gradient: 'from-emerald-500/5 to-teal-500/5',
  },
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Prototyping',
    description: 'Designing intuitive user flows and wireframes in Figma before writing a single line of code. Design and engineering, in one person.',
    bullets: ['Figma wireframes', 'Component systems', 'User flow mapping', 'Design-to-code handoff'],
    color: '#FB923C',
    gradient: 'from-orange-500/5 to-rose-500/5',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface/20 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn className="mb-16">
          <div className="section-label">What I Do</div>
          <h2 className="section-heading">
            Services I <span className="text-gradient">deliver</span>
          </h2>
          <p className="section-subheading">
            Whether you need a complete product or a specific layer — I can build it.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.1}>
              <div
                className={`glass rounded-2xl p-7 border border-border card-hover group h-full bg-gradient-to-br ${svc.gradient}`}
                style={{ '--accent': svc.color } }
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: svc.color,
                      background: `${svc.color}15`,
                      border: `1px solid ${svc.color}25`,
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-text-base text-lg">{svc.title}</h3>
                  </div>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-5">{svc.description}</p>

                <ul className="space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-text-muted">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
