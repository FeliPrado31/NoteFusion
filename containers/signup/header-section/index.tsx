import Image from 'next/image';

export default function HeaderSection() {
  return (
    <header>
      <Image
        alt='NoteFusion 📝'
        className='mx-auto h-12 w-auto'
        src='/placeholder.svg'
        width={48}
        height={48}
      />
      <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
        Sign up for NoteFusion 📝
      </h2>
      <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
        Create your account to start taking notes with ease.
      </p>
    </header>
  );
}
