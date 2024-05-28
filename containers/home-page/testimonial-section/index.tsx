import { FC } from 'react';
import Image from 'next/image';

interface TestimonialSectionProps {}

const TestimonialSection: FC<TestimonialSectionProps> = () => {
  return (
    <>
      <div className='container max-w-5xl px-4 py-16 md:py-24 lg:py-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <blockquote className='text-2xl font-medium leading-relaxed'>
              &ldquo;NoteFusion ha sido un verdadero juego cambiador para mi
              flujo de trabajo! El editor de Markdown es increíble y la
              sincronización entre dispositivos es tan conveniente.&rdquo;
            </blockquote>
            <div className='mt-4 flex items-center space-x-4'>
              <Image
                alt='User Avatar'
                className='rounded-full'
                height={48}
                src='/placeholder.svg'
                style={{
                  aspectRatio: '48/48',
                  objectFit: 'cover',
                }}
                width={48}
              />
              <div>
                <div className='font-medium'>Feli</div>
                <div className='text-gray-600 dark:text-gray-400'>
                  Software Developer at NoteFusion 📝
                </div>
              </div>
            </div>
          </div>
          <div>
            <blockquote className='text-2xl font-medium leading-relaxed'>
              &ldquo;He probado innumerables aplicaciones para tomar notas, pero
              NoteFusion es, con mucho, la más intuitiva y poderosa. El soporte
              de Markdown es un verdadero cambio de juego.&rdquo;
            </blockquote>
            <div className='mt-4 flex items-center space-x-4'>
              <Image
                alt='User Avatar'
                className='rounded-full'
                height={48}
                src='/placeholder.svg'
                style={{
                  aspectRatio: '48/48',
                  objectFit: 'cover',
                }}
                width={48}
              />
              <div>
                <div className='font-medium'>John Smith</div>
                <div className='text-gray-600 dark:text-gray-400'>
                  Software Engineer, Acme Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
