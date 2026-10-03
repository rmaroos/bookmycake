import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

type FeatureBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  alt: string;
  imageSide: 'left' | 'right';
  link: string;
};

export function FeatureBanner({
  eyebrow,
  title,
  description,
  cta,
  image,
  alt,
  imageSide,
  link,
}: FeatureBannerProps) {
  const isLeft = imageSide === 'left';

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center`}>
            <div className={`overflow-hidden aspect-[4/3] ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
              <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover img-zoom" />
            </div>
            <div className={`${isLeft ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
              <p className="text-[12px] uppercase tracking-eyebrow text-gold font-body italic mb-4">
                {eyebrow}
              </p>
              <h2 className="font-display font-normal text-4xl md:text-5xl text-ink leading-[1.1]">
                {title}
              </h2>
              <p className="mt-5 text-[15px] text-ink-muted leading-[1.8] font-body font-light max-w-md mx-auto md:mx-0">
                {description}
              </p>
              <Link
                to={link}
                className="inline-flex items-center gap-2 mt-7 text-[10px] uppercase tracking-nav text-gold font-body font-medium hover:gap-3 transition-all duration-300"
              >
                {cta} <ArrowRight size={13} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
