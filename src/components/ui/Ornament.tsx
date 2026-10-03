export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="block w-12 h-px bg-gold/40" />
      <span className="text-gold text-xs">✦</span>
      <span className="block w-12 h-px bg-gold/40" />
    </div>
  );
}
