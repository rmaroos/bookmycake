import { Reveal, useReveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Ornament } from '@/components/ui/Ornament';
import { Button } from '@/components/ui/Button';
import { waLink } from '@/data/site';

const values = [
  { title: 'Quality', desc: 'We never compromise on ingredients, flavour or finish.' },
  { title: 'Creativity', desc: 'Every cake is a fresh design, never a copy.' },
  { title: 'Freshness', desc: 'Baked close to your event date for the best taste.' },
  { title: 'Care', desc: 'Personal attention on every single order, no matter the size.' },
];

const processSteps = [
  { num: '01', title: 'Ingredients', desc: 'We start with fresh, quality ingredients sourced with care.' },
  { num: '02', title: 'Preparation', desc: 'Each component is prepared by hand — sponges, fillings, buttercream.' },
  { num: '03', title: 'Baking', desc: 'Cakes are baked fresh, never frozen, for the best texture and flavour.' },
  { num: '04', title: 'Decoration', desc: 'Hand-finished with sugar flowers, piping, and delicate detail work.' },
  { num: '05', title: 'Quality Check', desc: 'Every cake is inspected to ensure it meets our standards.' },
  { num: '06', title: 'To You', desc: 'Carefully packaged for pickup or delivery to your celebration.' },
];

export function AboutPage() {
  useReveal();

  return (
    <div className="pt-[78px] md:pt-[96px]">
      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/16140003/pexels-photo-16140003.jpeg?auto=compress&cs=tinysrgb&h=900&w=1920"
          alt="Pastry chefs decorating gourmet cakes with precision"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative max-w-prose mx-auto px-5 text-center">
          <p className="text-[12px] uppercase tracking-eyebrow text-white/70 font-body italic mb-4">Our Story</p>
          <h1 className="font-display font-normal text-5xl md:text-6xl text-white leading-[1.05]">
            Baking Moments<br />That Matter
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/3983578/pexels-photo-3983578.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                  alt="Pastry chef preparing a cake with chocolate drips"
                  loading="lazy"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">How It Began</p>
                <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">Our Story</h2>
                <div className="mt-6 space-y-4 text-[15px] text-ink-muted leading-[1.8] font-body font-light">
                  <p>
                    Maison Sucré began with a simple love for baking and a belief that every celebration
                    deserves a cake made with heart. What started as a home kitchen passion grew into a
                    boutique cake studio dedicated to creating beautiful, delicious cakes for life's
                    most special moments.
                  </p>
                  <p>
                    We believe a cake is more than dessert — it's the centrepiece of a celebration,
                    a symbol of love, and a memory in the making. That's why every cake we create is
                    designed individually, baked fresh, and finished by hand.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-prose mx-auto px-5 text-center">
          <Reveal>
            <Ornament className="mb-8" />
            <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">Our Philosophy</p>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.15]">
              Beautiful outside.<br />Delicious inside.<br />Made especially for you.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="From Ingredients To You"
              description="Every cake follows a careful, hands-on process to ensure it looks beautiful and tastes divine."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
            {processSteps.map((step, idx) => (
              <Reveal key={step.num} delay={(idx % 3) * 80}>
                <div className="border-t border-border pt-6">
                  <span className="font-display text-3xl text-gold/50 leading-none block mb-3">{step.num}</span>
                  <h3 className="font-display text-xl text-ink mb-2">{step.title}</h3>
                  <p className="text-[13px] text-ink-muted font-body font-light leading-[1.7]">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the scenes image */}
      <section className="bg-cream">
        <div className="max-w-editorial mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <div className="overflow-hidden aspect-[16/9]">
              <img
                src="https://images.pexels.com/photos/16135140/pexels-photo-16135140.jpeg?auto=compress&cs=tinysrgb&h=700&w=1920"
                alt="Pastry chefs crafting strawberry-topped pastries in a modern kitchen"
                loading="lazy"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-editorial mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-16">
            {values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 80}>
                <div className="text-center">
                  <span className="text-gold text-2xl block mb-3">✦</span>
                  <h3 className="font-display text-xl text-ink mb-2.5">{v.title}</h3>
                  <p className="text-[13px] text-ink-muted font-body font-light leading-[1.7]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="max-w-prose mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">
              Let's Create Your Moment
            </h2>
            <p className="mt-6 text-[15px] text-ink-muted leading-[1.8] font-body font-light">
              We'd love to be part of your next celebration. Reach out and let's start designing your cake.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button href="/contact">Make An Inquiry</Button>
              <Button variant="secondary" href={waLink('Hi, I would like to enquire about a cake.')}>WhatsApp Us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
