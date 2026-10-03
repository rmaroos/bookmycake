import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { waLink } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function CustomCake() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="overflow-hidden aspect-[4/5] md:aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/34833097/pexels-photo-34833097.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Pink two-tier custom cake with roses and pearls"
                loading="lazy"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">
                Custom Cakes
              </p>
              <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.05]">
                Have Something<br />Special In Mind?
              </h2>
              <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light max-w-md mx-auto md:mx-0">
                Share your idea, reference image, colours or theme and let us create a cake specially
                designed for your celebration. Every custom cake is a one-of-a-kind creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-9 justify-center md:justify-start">
                <Button href={waLink('Hi, I would like to discuss a custom cake design.')}>
                  Start A Custom Cake Inquiry
                </Button>
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-7 py-3 hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  View Gallery <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
