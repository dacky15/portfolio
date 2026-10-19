import { projects } from '../data/content'

function ProjectCard({ project, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`group relative bg-[#111] border rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:border-[#ff2a2a]/60 hover:bg-[#160a0a] ${
        project.featured ? 'md:col-span-2 border-[#ff2a2a]/30' : 'border-white/10'
      }`}
    >
      <span className="absolute -top-4 right-4 text-[6rem] font-black text-white/[0.04] leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#ff2a2a] mb-4">
        {project.tag}
      </span>
      <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
      <p className="text-white/50 font-semibold mt-1">{project.role}</p>
      <p className="text-white/75 leading-relaxed mt-4 max-w-3xl relative z-10">{project.text}</p>

      {project.points?.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-6">
          {project.points.map((p) => (
            <li key={p} className="flex gap-3 text-white/70 leading-snug">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-3 mt-7 relative z-10">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-5 py-2 text-sm font-semibold text-white/90 hover:border-[#ff2a2a]/60 hover:bg-[#ff2a2a]/10 transition-all duration-300"
          >
            {l.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-black w-full px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-12 md:mb-16 max-w-2xl">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/70 font-bold mb-6">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Products I've <span className="text-[#ff2a2a]">shipped</span>
          </h2>
          <p className="text-white/60 mt-5 text-lg leading-relaxed">
            Each one has the problem, the decisions, and the evidence behind it: PRDs, evals and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
