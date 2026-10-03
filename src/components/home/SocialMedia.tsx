import { Instagram as InstagramIcon } from 'lucide-react';
import { site } from '@/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const images = [
  'https://images.pexels.com/photos/32125117/pexels-photo-32125117.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/30233153/pexels-photo-30233153.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/34802628/pexels-photo-34802628.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/7475803/pexels-photo-7475803.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/19036040/pexels-photo-19036040.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
];

export function SocialMedia() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Follow Along"
            title="Follow Our Sweet Journey"
            description="Behind the scenes, new creations, and cakes in the making — join us on Instagram."
          />
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mt-14">
            {images.map((img, idx) => (
              <a
                key={idx}
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden aspect-square group"
              >
                <img src={img} alt="Instagram cake photo" loading="lazy" className="w-full h-full object-cover img-zoom" />
                <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500 flex items-center justify-center">
                  <InstagramIcon size={20} strokeWidth={1.5} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="text-center mt-10">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-nav text-gold font-body font-medium hover:gap-3 transition-all duration-300"
          >
            <InstagramIcon size={15} strokeWidth={1.5} />
            Follow On Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
