type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  scriptTitle?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  scriptTitle = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-prose ${className}`}
    >
      {eyebrow && (
        <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-normal leading-[1.1] text-ink ${
          scriptTitle ? 'font-script text-5xl md:text-6xl' : 'text-4xl md:text-5xl'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light">
          {description}
        </p>
      )}
    </div>
  );
}
