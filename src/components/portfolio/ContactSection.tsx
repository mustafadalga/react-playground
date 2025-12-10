import { SectionHeader } from './common/SectionHeader';
import { GradientLink } from './common/GradientLink';

const contactMethods = [
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    title: 'Email',
    value: 'mustafadalgaa@gmail.com',
    href: 'mailto:mustafadalgaa@gmail.com',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    title: 'LinkedIn',
    value: 'mustafadalga',
    href: 'https://linkedin.com/in/mustafadalga',
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    title: 'GitHub',
    value: 'mustafadalga',
    href: 'https://github.com/mustafadalga',
    gradient: 'from-gray-700 to-gray-900'
  }
];

const socialLinks = [
  {
    name: 'Technical Blog',
    url: 'https://sft.hashnode.dev',
    icon: '📝',
    color: 'text-blue-400'
  },
  {
    name: 'NPM Packages',
    url: 'https://www.npmjs.com/~mustafadalga',
    icon: '📦',
    color: 'text-red-400'
  },
  {
    name: 'Code Gists',
    url: 'https://gist.github.com/mustafadalga',
    icon: '💻',
    color: 'text-purple-400'
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader 
          title="Let's Connect"
          subtitle="Have a project in mind or want to discuss performance optimization? I'd love to hear from you!"
        />

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 p-8 text-center backdrop-blur-sm transition-all hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 transition-opacity group-hover:opacity-10`} />

              <div className="relative mb-4 flex justify-center text-cyan-400 transition-colors group-hover:text-cyan-300">
                {method.icon}
              </div>

              <h3 className="relative mb-2 text-lg font-bold text-white">
                {method.title}
              </h3>

              <p className="relative text-sm text-white/70 transition-colors group-hover:text-white/90">
                {method.value}
              </p>

              <div className="relative mt-4 flex justify-center">
                <svg className="h-5 w-5 text-cyan-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mb-12 rounded-2xl border border-white/10 bg-slate-800/30 p-8 backdrop-blur-sm md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            More Ways to Connect
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-800/50 p-4 transition-all hover:scale-105 hover:border-cyan-400/50 hover:bg-slate-800/80"
              >
                <span className="text-3xl">{link.icon}</span>
                <div className="flex-1">
                  <p className={`font-semibold ${link.color} transition-colors group-hover:text-cyan-300`}>
                    {link.name}
                  </p>
                  <p className="text-sm text-white/60">Visit →</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="mb-8 inline-block rounded-xl border border-white/10 bg-slate-800/30 px-8 py-4 backdrop-blur-sm">
            <p className="mb-2 text-sm text-white/60">Based in</p>
            <p className="text-2xl font-bold text-white">📍 Tallinn, Estonia</p>
            <p className="mt-2 text-sm text-cyan-400">Available for remote consulting worldwide</p>
          </div>

          <div className="mt-8">
            <GradientLink 
              href="mailto:mustafadalgaa@gmail.com"
              size="lg"
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            >
              Start a Conversation
            </GradientLink>
          </div>
        </div>
      </div>
    </section>
  );
}

