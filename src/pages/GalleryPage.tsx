import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, useReveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function GalleryPage() {
  useReveal();

  return (
    <div className="pt-[78px] md:pt-[96px]">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-ivory text-center">
        <div className="max-w-prose mx-auto px-5">
          <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Our Portfolio</p>
          <h1 className="font-display font-normal text-5xl md:text-6xl text-ink leading-[1.05]">Gallery</h1>
          <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light">
            A collection of cakes we've had the joy of creating for celebrations big and small.
            Browse by category and click any image to view it in full.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-prose mx-auto px-5 text-center">
          <Reveal>
            <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Your Cake Awaits</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">
              Inspired? Let's Create Yours
            </h2>
            <p className="mt-6 text-[15px] text-ink-muted leading-[1.8] font-body font-light">
              If you see something you love — or have something entirely different in mind —
              we'd love to bring your cake to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button href="/contact">Make An Inquiry</Button>
              <Link
                to="/cakes"
                className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-7 py-3 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Browse Cakes <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
