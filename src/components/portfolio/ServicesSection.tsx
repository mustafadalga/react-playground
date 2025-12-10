import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';
import { GradientLink } from './common/GradientLink';

const services = [
  {
    icon: '⚡',
    title: 'Web Performance & Optimization',
    description: 'Expert in delivering measurable performance improvements. Reduced page load times by 80% and improved Lighthouse scores from 50 to 88.',
    metrics: ['80% faster loads', '30%+ bundle reduction', 'Lighthouse score: 88'],
    gradient: 'from-cyan-500 to-blue-500',
    featured: true
  },
  {
    icon: '🔄',
    title: 'Legacy System Modernization',
    description: 'Specialized in migrations from Vue 2 to Vue 3 and Next.js with 25-50% performance gains. Clean code principles ensure maintainability.',
    metrics: ['Vue 2→3 migration', 'Next.js transitions', '25-50% performance gain'],
    gradient: 'from-purple-500 to-pink-500',
    featured: false
  },
  {
    icon: '👥',
    title: 'Technical Leadership & Mentorship',
    description: 'Led front-end teams, implemented standardized development practices (ESLint, Prettier, Husky), and mentored junior developers.',
    metrics: ['Team leadership', 'Code standards', 'Junior mentorship'],
    gradient: 'from-blue-500 to-indigo-500',
    featured: false
  },
  {
    icon: '💻',
    title: 'Full-Stack Development',
    description: 'Proficient in React/Next.js, Vue/Nuxt.js, TypeScript, and backend technologies. Built complete applications with Node.js, Express, and MongoDB.',
    metrics: ['React/Next.js', 'Vue/Nuxt.js', 'Node.js/Express'],
    gradient: 'from-green-500 to-teal-500',
    featured: false
  },
  {
    icon: '🧪',
    title: 'Testing & Quality Assurance',
    description: 'Implemented comprehensive testing strategies with Vitest, Testing Library, and end-to-end automation. Integrated Sentry for error monitoring.',
    metrics: ['Unit testing', 'E2E automation', 'Error tracking'],
    gradient: 'from-orange-500 to-red-500',
    featured: false
  },
  {
    icon: '🎨',
    title: 'UI/UX Development',
    description: 'Mobile-first responsive design with accessibility focus. WCAG compliance, screen-reader support, and modern design aesthetics.',
    metrics: ['Mobile-first', 'WCAG compliant', 'Responsive layouts'],
    gradient: 'from-pink-500 to-rose-500',
    featured: false
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader 
          title="Services & Expertise"
          subtitle="Specialized consulting services focused on delivering measurable results and optimal performance"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border ${
                service.featured 
                  ? 'border-cyan-400/50 md:col-span-2 lg:col-span-3' 
                  : 'border-white/10'
              } bg-slate-800/50 p-8 backdrop-blur-sm transition-all hover:scale-105 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20`}
            >
              {service.featured && (
                <>
                  <div className="absolute right-4 top-4 z-10">
                    <Badge variant="pill" size="sm">
                      PRIMARY SPECIALIZATION
                    </Badge>
                  </div>
                  
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-400 blur-3xl" />
                  </div>

                  <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                      <path d="M100 20L120 80L180 80L130 120L150 180L100 140L50 180L70 120L20 80L80 80L100 20Z" fill="currentColor" className="text-cyan-400"/>
                    </svg>
                  </div>
                </>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-5`} />

              <div className={service.featured ? 'md:grid md:grid-cols-2 md:gap-12' : ''}>
                <div className={service.featured ? '' : ''}>
                  <div className={`relative mb-4 ${service.featured ? 'text-6xl' : 'text-5xl'}`}>
                    {service.icon}
                  </div>

                  <h3 className={`relative mb-4 font-bold text-white ${
                    service.featured ? 'text-3xl md:text-4xl' : 'text-2xl'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`relative mb-6 leading-relaxed text-white/80 ${
                    service.featured ? 'text-lg max-w-xl' : 'text-base'
                  }`}>
                    {service.description}
                  </p>
                </div>

                <div className={service.featured ? 'relative flex flex-col justify-center' : 'relative'}>
                  {service.featured ? (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-4">Key Results</h4>
                      {service.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30 border border-cyan-400/20 backdrop-blur-sm">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-base font-medium text-white">{metric}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="md:mt-6 flex flex-wrap gap-2">
                      {service.metrics.map((metric, idx) => (
                        <Badge key={idx} gradient={service.gradient}>
                          ✓ {metric}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-xl text-white/80">Ready to optimize your application?</p>
          <GradientLink 
            href="#contact"
            icon={
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Let's Talk
          </GradientLink>
        </div>
      </div>
    </section>
  );
}

