import CharacteristicsSection from '../../containers/home-page/characteristics-section';
import FooterSection from '../../containers/home-page/footer-section';
import MainSection from '../../containers/home-page/main-section';
import PricingSection from '../../containers/home-page/pricing-section';
import TestimonialSection from '../../containers/home-page/testimonial-section';

export default function HomePage() {
  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50'>
        <MainSection />
        <CharacteristicsSection />
        <TestimonialSection />
        <PricingSection />
      </main>
      <footer className='bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8'>
        <FooterSection />
      </footer>
    </>
  );
}
