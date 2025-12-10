interface GradientLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
const sizeClasses = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-8 py-4 text-lg'
};


export function GradientLink({ href, children, icon, size = 'md' }: GradientLinkProps) {

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ${sizeClasses[size]} font-semibold text-white shadow-lg shadow-cyan-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/60`}
    >
      {children}
      {icon}
    </a>
  );
}
