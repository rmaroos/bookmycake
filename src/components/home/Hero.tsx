import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waLink } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[560px] max-h-[820px] w-full overflow-hidden">
      <img
        src="https://images.pexels.com/photos/17315403/pexels-photo-17315403.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
        alt="Luxurious wedding cake display surrounded by elegant flower arrangements"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/40" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
        <p className="text-[12px] uppercase tracking-[0.3em] text-white/80 font-body font-light italic mb-5 reveal is-visible">
          Handcrafted With Love
        </p>
        <h1 className="font-display font-normal text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl text-balance reveal is-visible" style={{ transitionDelay: '100ms' }}>
          Made For Your<br />Special Moments
        </h1>
        <p className="mt-7 text-[15px] md:text-[17px] text-white/85 font-body font-light leading-[1.7] max-w-xl reveal is-visible" style={{ transitionDelay: '200ms' }}>
          Handcrafted cakes created with care for birthdays, weddings, celebrations and everything worth remembering.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-9 reveal is-visible" style={{ transitionDelay: '300ms' }}>
          <Link to="/cakes">
            <Button variant="primary" icon={<ArrowRight size={14} strokeWidth={1.5} />}>Explore Our Cakes</Button>
          </Link>
          <Button variant="outline-light" href={waLink('Hi, I would like to enquire about a cake.')}>Make An Inquiry</Button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[10px] uppercase tracking-nav font-body">
        <span className="block w-px h-8 bg-white/30 mx-auto mb-2" />
        Scroll
      </div>
    </section>
  );
}
