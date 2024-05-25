'use server';

import Link from 'next/link';
import NavigationSlide from './navigation-slide';
import { FC } from 'react';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <header className='flex items-center justify-center'>
      <NavigationSlide />
    </header>
  );
};

export default HeroSection;
