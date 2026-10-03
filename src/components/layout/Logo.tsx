export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="text-gold text-lg leading-none mb-1">✦</span>
      {showText && (
        <span className="font-display text-xl md:text-2xl tracking-[0.15em] uppercase text-ink leading-none">
          Maison Sucré
        </span>
      )}
    </div>
  );
}
