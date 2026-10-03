import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cakes, cakeFilters, type Cake } from '@/data/cakes';
import { CakeCard, CakeModal } from '@/components/cakes/CakeCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, useReveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { waLink } from '@/data/site';

export function CakesPage() {
  useReveal();
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Cake | null>(null);

  const filtered = filter === 'All' ? cakes : cakes.filter((c) => c.category === filter);

  return (
    <div className="pt-[78px] md:pt-[96px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-ivory text-center">
        <div className="max-w-prose mx-auto px-5">
          <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Our Collection</p>
          <h1 className="font-display font-normal text-5xl md:text-6xl text-ink leading-[1.05]">Our Cakes</h1>
          <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light">
            Explore our collection of handcrafted cakes and find inspiration for your next celebration.
            Every cake is made to order with care and quality ingredients.
          </p>
        </div>
      </section>

      {/* Featured cake banner */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/28259731/pexels-photo-28259731.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
                  alt="Sophisticated three-tier wedding cake with white roses"
                  loading="lazy"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Signature Cake</p>
                <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">The Ivory Rose</h2>
                <p className="mt-5 text-[15px] text-ink-muted leading-[1.8] font-body font-light max-w-md mx-auto md:mx-0">
                  A sophisticated three-tier cake adorned with white roses and greenery. Our most requested
                  design for weddings and grand celebrations.
                </p>
                <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                  <span className="text-[11px] px-3 py-1.5 border border-border text-ink-muted font-body font-light">Vanilla</span>
                  <span className="text-[11px] px-3 py-1.5 border border-border text-ink-muted font-body font-light">Almond</span>
                  <span className="text-[11px] px-3 py-1.5 border border-border text-ink-muted font-body font-light">Three Tier</span>
                </div>
                <Button href={waLink('Hi, I am interested in the Ivory Rose cake.')} className="mt-8">Request This Cake</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Browse Collection"
              title="Cakes Made To Celebrate"
              description="Filter by category to find the perfect cake for your occasion."
            />
          </Reveal>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7 mt-12 mb-12">
            {cakeFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[10px] uppercase tracking-nav font-body font-medium transition-colors duration-300 relative pb-1.5 ${
                  filter === f ? 'text-gold' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {f}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${filter === f ? 'w-full' : 'w-0'}`} />
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((cake, idx) => (
              <Reveal key={cake.id} delay={(idx % 4) * 60}>
                <CakeCard cake={cake} onClick={setSelected} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom cake CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-prose mx-auto px-5 text-center">
          <Reveal>
            <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Custom Cakes</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">
              Don't See What You're Looking For?
            </h2>
            <p className="mt-6 text-[15px] text-ink-muted leading-[1.8] font-body font-light">
              We create bespoke cakes designed around your vision. Share your idea and let us craft
              something uniquely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button href="/contact">Start A Custom Inquiry</Button>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-7 py-3 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                View Gallery <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CakeModal cake={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
