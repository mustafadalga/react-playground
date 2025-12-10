interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover 
    ? 'transition-all hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20' 
    : '';
  
  return (
    <div className={`rounded-2xl border border-white/10 bg-slate-800/50 p-6 backdrop-blur-sm ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
