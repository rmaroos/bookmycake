import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, galleryFilters, type GalleryImage } from '@/data/gallery';

export function GalleryGrid() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % filtered.length));
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7 mb-12">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-[10px] uppercase tracking-nav font-body font-medium transition-colors duration-300 relative pb-1.5 ${
              filter === f ? 'text-gold' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {f}
            <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${filter === f ? 'w-full' : 'w-0'}`} />
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
        {filtered.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            className="block w-full overflow-hidden break-inside-avoid group relative"
          >
            <img
              src={img.image}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover img-zoom"
            />
            <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center" onClick={closeLightbox}>
          <div className="absolute inset-0 bg-ink/95" />
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <button
            className="absolute left-3 md:left-8 text-white/80 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          <button
            className="absolute right-3 md:right-8 text-white/80 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
          <figure className="relative max-w-4xl max-h-[85vh] px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <figcaption className="text-center text-[12px] text-white/60 font-body font-light mt-4 leading-relaxed">
              {filtered[lightboxIndex].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

export type { GalleryImage };
