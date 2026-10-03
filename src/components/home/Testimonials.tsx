import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const t = testimonials[active];

  return (
    <section
      className="py-24 md:py-32 bg-ivory"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Sweet Words" title="Loved By Our Customers" />
        </Reveal>

        <Reveal>
          <div className="max-w-3xl mx-auto text-center mt-14">
            <span className="font-display text-6xl text-gold/30 leading-none block mb-4">"</span>
            <blockquote className="font-display text-2xl md:text-3xl text-ink leading-[1.5] font-light italic">
              {t.quote}
            </blockquote>
            <p className="mt-6 text-[12px] uppercase tracking-eyebrow text-gold font-body">
              — {t.name}
            </p>
            <p className="text-[11px] text-ink-light font-body font-light mt-1">{t.event}</p>
          </div>
        </Reveal>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="text-ink-muted hover:text-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-1.5 transition-all duration-300 ${active === idx ? 'w-8 bg-gold' : 'w-1.5 bg-border hover:bg-gold/50'}`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
            className="text-ink-muted hover:text-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
