import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { Categories } from '@/components/home/Categories';
import { FeatureBanner } from '@/components/home/FeatureBanner';
import { FeaturedCakes } from '@/components/home/FeaturedCakes';
import { CustomCake } from '@/components/home/CustomCake';
import { Celebrations } from '@/components/home/Celebrations';
import { Process } from '@/components/home/Process';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { SocialMedia } from '@/components/home/SocialMedia';
import { FAQPreview } from '@/components/home/FAQPreview';
import { FinalCTA } from '@/components/home/FinalCTA';
import { useReveal } from '@/components/ui/Reveal';

export function HomePage() {
  useReveal();

  return (
    <>
      <Hero />
      <Intro />
      <Categories />
      <FeatureBanner
        eyebrow="Signature Collection"
        title="Wedding Cakes Made To Remember"
        description="Elegant tiered cakes designed around your love story — from minimalist ivory to cascading sugar flowers, every wedding cake is crafted to be as unforgettable as your day."
        cta="Discover Wedding Cakes"
        image="https://images.pexels.com/photos/30233124/pexels-photo-30233124.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
        alt="Beautiful white wedding cake topped with flowers"
        imageSide="left"
        link="/cakes"
      />
      <FeaturedCakes />
      <CustomCake />
      <Celebrations />
      <FeatureBanner
        eyebrow="Seasonal Specials"
        title="Cakes For The Season"
        description="Fresh flavours and beautiful designs inspired by the season. Whether it's a summer berry celebration or a warm winter gathering, we have a cake made for the moment."
        cta="Explore Cakes"
        image="https://images.pexels.com/photos/8015247/pexels-photo-8015247.jpeg?auto=compress&cs=tinysrgb&h=800&w=800"
        alt="White frosted cake with red berries beside champagne glasses"
        imageSide="right"
        link="/cakes"
      />
      <Process />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <SocialMedia />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
