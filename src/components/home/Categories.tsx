import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Categories() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Find Your Perfect Cake"
            title="Crafted For Every Celebration"
            description="From elegant wedding tiers to playful birthday designs, explore cakes made for every kind of special moment."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
          {categories.slice(0, 6).map((cat, idx) => (
            <Reveal key={cat.slug} delay={idx * 80}>
              <Link to="/cakes" className="group block">
                <div className="overflow-hidden aspect-[4/3] bg-cream">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">{cat.name}</h3>
                  <p className="mt-2.5 text-[13px] text-ink-muted font-body font-light leading-[1.7] max-w-xs mx-auto">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[10px] uppercase tracking-nav text-gold font-body font-medium group-hover:gap-2.5 transition-all duration-300">
                    Discover <ArrowRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
