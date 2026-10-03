import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const features = [
  { title: 'Freshly Made', desc: 'Cakes prepared with care, never frozen, always fresh.' },
  { title: 'Custom Designs', desc: 'Designed around your celebration, theme and style.' },
  { title: 'Quality Ingredients', desc: 'Focused on quality and taste in every layer.' },
  { title: 'Attention To Detail', desc: 'Every decoration is carefully and thoughtfully finished.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Why Choose Us" title="Crafted With Care" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-16">
          {features.map((f, idx) => (
            <Reveal key={f.title} delay={idx * 80}>
              <div className="text-center">
                <span className="font-display text-3xl text-gold/50 block mb-3">✦</span>
                <h3 className="font-display text-xl text-ink mb-2.5">{f.title}</h3>
                <p className="text-[13px] text-ink-muted font-body font-light leading-[1.7]">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
