import Image from 'next/image';
import HeroSection from '../../containers/home-page/hero-section';
import MainSection from '../../containers/home-page/main-section';
import CharacteristicsSection from '../../containers/home-page/characteristics-section';
import TestimonialSection from '../../containers/home-page/testimonial-section';
import PricingSection from '../../containers/home-page/pricing-section';
import FooterSection from '../../containers/home-page/footer-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <CharacteristicsSection />
      <TestimonialSection />
      <PricingSection />
      <FooterSection />
    </>
  );
}
