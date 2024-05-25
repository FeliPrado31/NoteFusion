import { FC } from 'react';
import TestimonialSlide from './testimonial-slide';
import { Button } from '@/components/ui/button';

interface TestimonialSectionProps {}

const TestimonialSection: FC<TestimonialSectionProps> = () => {
  return (
    <>
      <h3>Lo que dicen nuestros usuarios</h3>
      <TestimonialSlide />
      <Button>Leer más testimonios</Button>
    </>
  );
};

export default TestimonialSection;
