import { SectionHeader } from './common/SectionHeader';
import { Badge } from './common/Badge';

const projects = [
  {
    title: 'Othello - Realtime 2 Player Mind Game',
    description: 'Real-time multiplayer strategy game with GraphQL subscriptions and WebSocket communication',
    tech: ['Next.js', 'Express.js', 'GraphQL', 'Apollo Client', 'Apollo Server'],
    github: 'https://github.com/mustafadalga/othello',
    category: 'Game Development',
    icon: '🎮'
  },
  {
    title: 'Realtime 2 Player Mangala Mind Game',
    description: 'Traditional Turkish board game with real-time multiplayer functionality using Firebase',
    tech: ['Next.js', 'Firebase', 'Real-time Database', 'TypeScript'],
    github: 'https://github.com/mustafadalga/mangala',
    category: 'Game Development',
    icon: '🎲'
  },
  {
    title: 'SkyScraper Mind Game',
    description: 'Logic puzzle game that challenges players to strategically place buildings',
    tech: ['Vue.js', 'TypeScript', 'Algorithm Design'],
    github: 'https://github.com/mustafadalga/skyscraper',
    category: 'Game Development',
    icon: '🏙️'
  },
  {
    title: 'CV Terminal Builder',
    description: 'Interactive terminal-style CV builder with modern UI/UX',
    tech: ['React', 'TypeScript', 'Terminal UI'],
    github: 'https://github.com/mustafadalga/cv-terminal-builder',
    category: 'Developer Tools',
    icon: '💼'
  },
  {
    title: 'Educational ABC Logic Puzzle',
    description: 'Educational puzzle game designed to enhance logical thinking skills',
    tech: ['Vue.js', 'Game Logic', 'Educational Design'],
    github: 'https://github.com/mustafadalga/abc-logic-puzzle',
    category: 'Education',
    icon: '🧩'
  },
  {
    title: 'Pyramid Mind Game',
    description: 'Mathematical puzzle game with engaging gameplay mechanics',
    tech: ['JavaScript', 'Game Algorithms'],
    github: 'https://github.com/mustafadalga/magic-pyramid',
    category: 'Game Development',
    icon: '🔺'
  },
  {
    title: 'Music Player',
    description: 'Modern music player with elegant UI and smooth playback controls',
    tech: ['React', 'Web Audio API', 'CSS Animations'],
    github: 'https://github.com/mustafadalga/music-player',
    category: 'Media',
    icon: '🎵'
  },
  {
    title: 'Vite Plugin - React Remove Attributes',
    description: 'Production-ready Vite plugin to remove test attributes from React builds',
    tech: ['Vite', 'Plugin Development', 'AST'],
    github: 'https://www.npmjs.com/package/react-remove-attr',
    category: 'Developer Tools',
    icon: '⚙️'
  },
  {
    title: 'Vite Plugin - Vue Remove Attributes',
    description: 'Vite plugin for removing development attributes from Vue.js production builds',
    tech: ['Vite', 'Vue.js', 'Build Optimization'],
    github: 'https://www.npmjs.com/package/remove-attr',
    category: 'Developer Tools',
    icon: '🔧'
  },
  {
    title: 'Tactix - Real Time Intelligence Game',
    description: 'Strategic real-time multiplayer game with advanced game theory',
    tech: ['Vue.js', 'WebSocket', 'Game Theory'],
    github: 'https://github.com/mustafadalga/tactix',
    category: 'Game Development',
    icon: '🎯'
  },
  {
    title: 'Realtime 2 Player Connection Mind Game',
    description: 'Connect-four style game with real-time multiplayer features',
    tech: ['Next.js', 'WebSocket', 'Game State Management'],
    github: 'https://github.com/mustafadalga/dortleme',
    category: 'Game Development',
    icon: '🔴'
  },
  {
    title: 'Rock Paper Scissors Bet Game',
    description: 'Classic game with betting mechanics and smooth animations',
    tech: ['React', 'Game Mechanics', 'Animations'],
    github: 'https://github.com/mustafadalga/rock-paper-scissors',
    category: 'Game Development',
    icon: '✊'
  },
  {
    title: 'Tooltip Generator',
    description: 'Utility tool for generating customizable tooltips with various styles',
    tech: ['JavaScript', 'CSS', 'Component Library'],
    github: 'https://github.com/mustafadalga/tooltip-generator',
    category: 'Developer Tools',
    icon: '💬'
  },
  {
    title: 'Computer Lab Automation',
    description: 'Management system for computer lab operations and resource allocation',
    tech: ['PHP', 'MySQL', 'System Design'],
    github: 'https://github.com/mustafadalga/bilgisayar-lab-otomasyonu',
    category: 'Enterprise',
    icon: '🖥️'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-slate-900 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader 
          title="Featured Projects"
          subtitle="Open-source projects showcasing expertise in game development, developer tools, and web applications"
        />

        <div className="mb-12 flex flex-wrap justify-center gap-6">
          <a 
            href="https://github.com/mustafadalga"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-slate-800/50 px-6 py-4 backdrop-blur-sm transition-all hover:scale-105 hover:border-cyan-400/50 hover:bg-slate-800/80"
          >
            <p className="text-sm text-white/60">GitHub Profile</p>
            <p className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300">@mustafadalga</p>
          </a>
          <a 
            href="https://www.npmjs.com/~mustafadalga"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-slate-800/50 px-6 py-4 backdrop-blur-sm transition-all hover:scale-105 hover:border-red-400/50 hover:bg-slate-800/80"
          >
            <p className="text-sm text-white/60">NPM Packages</p>
            <p className="text-xl font-bold text-red-400 group-hover:text-red-300">~mustafadalga</p>
          </a>
          <a 
            href="https://gist.github.com/mustafadalga"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-slate-800/50 px-6 py-4 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-400/50 hover:bg-slate-800/80"
          >
            <p className="text-sm text-white/60">Code Gists</p>
            <p className="text-xl font-bold text-purple-400 group-hover:text-purple-300">View Snippets</p>
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="pill" gradient="from-cyan-400 to-cyan-400" size="sm">
                  {project.category}
                </Badge>
                <span className="text-3xl">{project.icon}</span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-white/70">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-md bg-slate-700/50 px-2 py-1 text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

