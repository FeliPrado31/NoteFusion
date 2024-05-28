import Link from 'next/link';
import SecurityAndPrivacitySlide from './security-and-privacity-slide';
import PlansAndPricesSlide from './plans-and-prices-slide';

export default function FeatureSection() {
  return (
    <>
      <SecurityAndPrivacitySlide />
      <PlansAndPricesSlide />
    </>
  );
}
