import type { Cake } from '@/data/cakes';
import { waLink } from '@/data/site';

type CakeCardProps = {
  cake: Cake;
  onClick: (cake: Cake) => void;
};

export function CakeCard({ cake, onClick }: CakeCardProps) {
  return (
    <div
      className="group cursor-pointer"
      onClick={() => onClick(cake)}
    >
      <div className="relative overflow-hidden bg-ivory aspect-square">
        <img
          src={cake.image}
          alt={cake.alt}
          loading="lazy"
          className="w-full h-full object-cover img-zoom"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-display text-lg text-ink leading-tight">{cake.name}</h3>
        <p className="text-[11px] uppercase tracking-eyebrow text-ink-light font-body mt-1.5">
          {cake.category}
        </p>
        <button
          className="mt-3 text-[10px] uppercase tracking-nav text-gold font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => { e.stopPropagation(); onClick(cake); }}
        >
          View →
        </button>
      </div>
    </div>
  );
}

export function CakeModal({ cake, onClose }: { cake: Cake | null; onClose: () => void }) {
  if (!cake) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/80" />
      <div
        className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-square md:aspect-auto md:h-full">
          <img src={cake.image} alt={cake.alt} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 md:p-10 flex flex-col">
          <p className="text-[11px] uppercase tracking-eyebrow text-gold font-body italic mb-3">
            {cake.category}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">{cake.name}</h2>
          <p className="mt-4 text-[14px] text-ink-muted leading-[1.8] font-body font-light">
            {cake.description}
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <h4 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-2">Flavours</h4>
              <div className="flex flex-wrap gap-2">
                {cake.flavours.map((f) => (
                  <span key={f} className="text-[11px] px-3 py-1.5 border border-border text-ink-muted font-body font-light">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-2">Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {cake.sizes.map((s) => (
                  <span key={s} className="text-[11px] px-3 py-1.5 border border-border text-ink-muted font-body font-light">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-nav text-ink font-body font-medium mb-2">Perfect For</h4>
              <p className="text-[13px] text-ink-muted font-body font-light">{cake.occasions.join(', ')}</p>
            </div>
          </div>

          <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink(`Hi, I am interested in the ${cake.name}. I would like to know more about availability and pricing.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] uppercase tracking-nav font-body font-medium bg-gold text-white px-6 py-3.5 hover:bg-gold-dark transition-colors duration-300"
            >
              Request This Cake
            </a>
            <button
              onClick={onClose}
              className="flex-1 text-center text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-6 py-3.5 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
