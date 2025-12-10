interface BadgeProps {
  children: React.ReactNode;
  gradient?: string;
  variant?: 'pill' | 'rounded';
  size?: 'sm' | 'md';
}

export function Badge({ children, gradient = 'from-cyan-500 to-blue-500', variant = 'rounded', size = 'sm' }: BadgeProps) {
  const baseClasses = 'inline-block bg-gradient-to-r backdrop-blur-sm text-white font-medium';
  const variantClasses = variant === 'pill' ? 'rounded-full' : 'rounded-lg';
  const sizeClasses = size === 'sm' ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base';
  
  return (
    <span className={`${baseClasses} ${variantClasses} ${sizeClasses} ${gradient} bg-opacity-20`}>
      {children}
    </span>
  );
}
