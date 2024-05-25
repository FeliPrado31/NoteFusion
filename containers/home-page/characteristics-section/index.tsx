import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

interface CharacteristicsSectionProps {}

const CharacteristicsSection: React.FC<CharacteristicsSectionProps> = () => {
  return (
    <div className='bg-gray-100 '>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
          Por qué elegir NoteFusion
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white rounded-md p-6 shadow-sm hover:shadow-lg transition duration-150 ease-in-out'>
            <h3 className='text-lg font-medium text-gray-900 mt-4'>
              Organización de notas en carpetas y etiquetas
            </h3>
            <p className='mt-2 text-gray-600 text-sm'>
              Clasifica tus notas en carpetas y agrupa por etiquetas para una
              mejor organización.
            </p>
          </div>
          <div className='bg-white rounded-md p-6 shadow-sm hover:shadow-lg transition duration-150 ease-in-out'>
            <h3 className='text-lg font-medium text-gray-900 mt-4'>
              Búsqueda avanzada por título, contenido y etiquetas
            </h3>
            <p className='mt-2 text-gray-600 text-sm'>
              Realiza búsquedas filtradas por título, contenido y etiquetas para
              encontrar tus notas en cuestión.
            </p>
          </div>
          <div className='bg-white rounded-md p-6 shadow-sm hover:shadow-lg transition duration-150 ease-in-out'>
            <h3 className='text-lg font-medium text-gray-900 mt-4'>
              Editor de Markdown con vista previa en tiempo real
            </h3>
            <p className='mt-2 text-gray-600 text-sm'>
              Escribe tus notas en un editor Markdown moderno y visualiza la
              vista previa en tiempo real para una mejor redacción.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Button>Descubre más</Button>
      </div>
    </div>
  );
};

export default CharacteristicsSection;
