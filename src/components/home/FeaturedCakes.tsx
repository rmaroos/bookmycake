import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cakes, type Cake } from '@/data/cakes';
import { CakeCard, CakeModal } from '@/components/cakes/CakeCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function FeaturedCakes() {
  const [selected, setSelected] = useState<Cake | null>(null);
  const featured = cakes.filter((c) => c.featured).slice(0, 8);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Sweet Collection"
            title="A Few Of Our Favourites"
            description="Explore a selection of handcrafted cakes created for birthdays, weddings, anniversaries and special moments."
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          {featured.map((cake, idx) => (
            <Reveal key={cake.id} delay={(idx % 4) * 80}>
              <CakeCard cake={cake} onClick={setSelected} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/cakes"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-8 py-3.5 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            View All Cakes <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <CakeModal cake={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
