import Link from 'next/link';

interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = () => {
  return (
    <>
      <div className='container max-w-5xl px-4 py-16 md:py-24 lg:py-32'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Organiza tus notas con NoteFusion 📝
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400'>
            Disfruta de un editor de Markdown con vista previa en tiempo real,
            organización avanzada de notas, sincronización entre dispositivos y
            colaboración en tiempo real.
          </p>
          <div className='flex justify-center space-x-4'>
            <Link
              className='inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              href='#'
            >
              Registrarse
            </Link>
            <Link
              className='inline-flex items-center justify-center rounded-md bg-gray-200 px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              href='#'
            >
              Suscribirse
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
