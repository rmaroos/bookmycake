import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { galleryImages } from '@/data/gallery';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-editorial mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title="A Little Taste Of Our Work"
            description="Every cake tells a story. Browse a selection of our recent creations."
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-16">
          {preview.map((img, idx) => (
            <Reveal key={img.id} delay={(idx % 3) * 80}>
              <div className={`overflow-hidden ${idx === 0 ? 'row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-square'}`}>
                <img src={img.image} alt={img.alt} loading="lazy" className="w-full h-full object-cover img-zoom" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-nav font-body font-medium border border-ink/20 text-ink px-8 py-3.5 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            View Full Gallery <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
