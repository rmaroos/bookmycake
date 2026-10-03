import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const occasions = [
  { name: 'Birthdays', image: 'https://images.pexels.com/photos/32125117/pexels-photo-32125117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Birthday cake with pink flowers', desc: 'Make their day a little sweeter.' },
  { name: 'Weddings', image: 'https://images.pexels.com/photos/11712500/pexels-photo-11712500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two-tier wedding cake with white roses', desc: 'A cake as timeless as your love.' },
  { name: 'Anniversaries', image: 'https://images.pexels.com/photos/8015247/pexels-photo-8015247.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'White frosted cake with berries', desc: 'Celebrate the years you share.' },
  { name: 'Baby Showers', image: 'https://images.pexels.com/photos/14454566/pexels-photo-14454566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Pink birthday cake with flowers', desc: 'Welcome a new little joy.' },
  { name: 'Engagements', image: 'https://images.pexels.com/photos/20045506/pexels-photo-20045506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Wedding cake with pink roses', desc: 'Sweet beginnings deserve sweet cakes.' },
  { name: 'Graduations', image: 'https://images.pexels.com/photos/7600420/pexels-photo-7600420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Birthday cake with candles and balloons', desc: 'Honour their achievement in style.' },
];

export function Celebrations() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="For Every Special Moment"
            title="Made For Every Celebration"
            description="Whatever the occasion, we'll create a cake that becomes part of the memory."
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-16">
          {occasions.map((occ, idx) => (
            <Reveal key={occ.name} delay={(idx % 3) * 80}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] md:aspect-[4/3]">
                  <img src={occ.image} alt={occ.alt} loading="lazy" className="w-full h-full object-cover img-zoom" />
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-lg md:text-xl text-ink">{occ.name}</h3>
                  <p className="text-[12px] text-ink-muted font-body font-light mt-1">{occ.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
