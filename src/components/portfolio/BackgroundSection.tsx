import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';

const skills = [
  'Vue.js', 'React.js', 'Next.js', 'TypeScript', 'JavaScript',
  'HTML5', 'SCSS', 'CSS3', 'Tailwind CSS', 'Vuex', 'Pinia',
  'Redux Toolkit', 'Zustand', 'Vitest', 'Testing Library'
];

const highlights = [
  {
    icon: '🚀',
    title: 'Performance Pioneer',
    description: 'Improved Lighthouse scores from 50 to 88, cutting page load times by 80%'
  },
  {
    icon: '🔄',
    title: 'Migration Expert',
    description: 'Led Vue2 to Vue3/Next.js migrations with 25-50% performance gains'
  },
  {
    icon: '👥',
    title: 'Tech Leader',
    description: 'Mentored teams, standardized development practices, and improved code quality'
  },
  {
    icon: '⚡',
    title: 'Optimization Specialist',
    description: 'Reduced bundle sizes by 30%+ through tree-shaking and smart optimization'
  }
];

export default function BackgroundSection() {
  return (
    <section id="background" className="relative bg-slate-900 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="About Me" />

        <div className="mb-16 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-purple-900/30 p-8 backdrop-blur-sm md:p-12">
          <p className="text-lg leading-relaxed text-white/90 md:text-xl">
            With <span className="font-bold text-cyan-400">7+ years of experience</span>, 
            I specialize in <span className="font-bold text-purple-400">application performance and modernization</span>. 
            I have a proven track record migrating legacy systems and delivering measurable performance gains, 
            including reducing page load times by <span className="font-bold text-blue-400">80%</span> and 
            improving Lighthouse scores from 50 to <span className="font-bold text-green-400">88</span>.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
            Experienced in technical mentorship, architectural design, and modern frameworks 
            including <span className="font-semibold text-cyan-300">React/Next.js</span>, {' '}
            <span className="font-semibold text-cyan-300">Vue/Nuxt.js</span>, and {' '}
            <span className="font-semibold text-cyan-300">TypeScript</span>.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group rounded-xl border border-white/10 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="mb-4 text-4xl">{highlight.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-white">{highlight.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-800/30 p-8 backdrop-blur-sm md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            Technical Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="pill" gradient="from-cyan-400 to-blue-400">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-xl border border-white/10 bg-slate-800/30 px-8 py-4 backdrop-blur-sm">
            <p className="text-sm text-white/60">Location</p>
            <p className="text-lg font-semibold text-white">📍 Tallinn, Estonia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

