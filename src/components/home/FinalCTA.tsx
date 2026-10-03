import { MessageCircle } from 'lucide-react';
import { waLink } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/29388917/pexels-photo-29388917.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
        alt="White wedding cake surrounded by floral arrangements"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative max-w-prose mx-auto px-5 text-center">
        <Reveal>
          <p className="text-[12px] uppercase tracking-eyebrow text-white/70 font-body italic mb-5">
            Let's Begin
          </p>
          <h2 className="font-display font-normal text-4xl md:text-6xl text-white leading-[1.05]">
            Ready To Create Something Sweet?
          </h2>
          <p className="mt-6 text-[15px] md:text-[16px] text-white/80 font-body font-light leading-[1.8] max-w-lg mx-auto">
            Tell us what you're celebrating and let's create a cake made especially for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
            <Button variant="primary" href="/contact">Make An Inquiry</Button>
            <Button
              variant="outline-light"
              href={waLink('Hi, I would like to enquire about a cake.')}
              icon={<MessageCircle size={14} strokeWidth={1.5} />}
            >
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
