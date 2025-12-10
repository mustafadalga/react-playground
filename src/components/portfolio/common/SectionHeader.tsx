interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-white/70 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
