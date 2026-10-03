import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Ornament } from '@/components/ui/Ornament';

export function Intro() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-prose mx-auto px-5 text-center">
        <Ornament className="mb-8" />
        <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-5">
          Welcome to Maison Sucré
        </p>
        <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">
          More Than Just A Cake
        </h2>
        <p className="mt-6 text-[15px] md:text-[16px] text-ink-muted leading-[1.8] font-body font-light">
          Every celebration deserves something special. We create handcrafted cakes designed around your occasion,
          your style and your story — using quality ingredients and a passion for detail that you can taste in every slice.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 mt-8 text-[10px] uppercase tracking-nav text-gold font-body font-medium hover:gap-3 transition-all duration-300"
        >
          Learn About Us <ArrowRight size={13} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
