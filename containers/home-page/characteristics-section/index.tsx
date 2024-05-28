import {
  BookMarkedIcon,
  CombineIcon,
  FolderIcon,
  FolderSyncIcon,
} from 'lucide-react';

interface CharacteristicsSectionProps {}

const CharacteristicsSection: React.FC<CharacteristicsSectionProps> = () => {
  return (
    <>
      <div className='container max-w-5xl px-4 py-16 md:py-24 lg:py-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center text-center space-y-4'>
            <BookMarkedIcon className='h-12 w-12 text-indigo-600' />
            <h3 className='text-xl font-semibold'>Editor de Markdown</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Escribe y da formato a tus notas con el potente editor de
              Markdown, con vista previa en tiempo real.
            </p>
          </div>
          <div className='flex flex-col items-center text-center space-y-4'>
            <FolderIcon className='h-12 w-12 text-indigo-600' />
            <h3 className='text-xl font-semibold'>Organización avanzada</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Mantén tus notas ordenadas y fáciles de encontrar con carpetas,
              etiquetas y búsqueda.
            </p>
          </div>
          <div className='flex flex-col items-center text-center space-y-4'>
            <FolderSyncIcon className='h-12 w-12 text-indigo-600' />
            <h3 className='text-xl font-semibold'>Sincronización</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Accede a tus notas desde cualquier dispositivo con la
              sincronización en la nube.
            </p>
          </div>
          <div className='flex flex-col items-center text-center space-y-4'>
            <CombineIcon className='h-12 w-12 text-indigo-600' />
            <h3 className='text-xl font-semibold'>Colaboración</h3>
            <p className='text-gray-600 dark:text-gray-400'>
              Comparte y colabora en tiempo real con tus compañeros de equipo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacteristicsSection;
