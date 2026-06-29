import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import FadeIn from './FadeIn';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
];

function ProjectCard({ project, index }) {
  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <div
        className={`glass rounded-2xl border border-border card-hover group h-full flex flex-col overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {/* Image placeholder */}
        <div
          className="relative h-44 flex items-center justify-center overflow-hidden border-b border-border/50"
          style={{ background: `linear-gradient(135deg, ${project.accentColor}08, transparent)` }}
        >
          <div className="text-6xl opacity-60 group-hover:scale-110 transition-transform duration-500">
            {project.icon}
          </div>
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-semibold bg-primary-glow text-primary border border-primary/20">
              Featured
            </div>
          )}
          {/* Hover overlay with links */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-text-muted hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-text-muted hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <h3 className="font-bold text-text-base text-lg mb-2">{project.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md text-xs font-medium border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}25`,
                  background: `${project.accentColor}10`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Footer links */}
          <div className="flex items-center gap-4 pt-3 border-t border-border/50">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
            >
              <Github size={13} />
              Source code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors ml-auto"
            >
              <ExternalLink size={13} />
              Live demo
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn className="mb-10">
          <div className="section-label">Projects</div>
          <h2 className="section-heading">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="section-subheading">
            A selection of projects that demonstrate full-stack thinking — from concept to deployment.
          </p>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1} className="mb-8">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === f.value
                    ? 'bg-primary-glow text-primary border border-primary/30'
                    : 'glass-light text-text-muted border border-border hover:border-border-2 hover:text-text-base'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">
            These are just a few highlights. More on GitHub.
          </p>
          <a
            href="https://github.com/jawadaadilwebdev"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
