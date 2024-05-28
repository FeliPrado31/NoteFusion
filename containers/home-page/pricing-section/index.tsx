import { CheckIcon, XIcon } from 'lucide-react';
import Link from 'next/link';

interface PricingSectionProps {}

const PricingSection: React.FC<PricingSectionProps> = () => {
  return (
    <div className='container max-w-5xl px-4 py-16 md:py-24 lg:py-32'>
      <div className='text-center space-y-4'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
          Elige tu plan
        </h2>
        <p className='max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400'>
          Encuentra el plan que mejor se adapte a tus necesidades.
        </p>
      </div>
      <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-3'>
        <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800'>
          <h3 className='text-2xl font-bold'>Gratis</h3>
          <p className='mt-4 text-4xl font-bold'>$0</p>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>por mes</p>
          <div className='mt-6 space-y-4'>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Unlimited notes</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Markdown support</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Basic organization</span>
            </div>
            <div className='flex items-center space-x-2'>
              <XIcon className='h-5 w-5 text-gray-400 dark:text-gray-600' />
              <span>Cross-device sync</span>
            </div>
            <div className='flex items-center space-x-2'>
              <XIcon className='h-5 w-5 text-gray-400 dark:text-gray-600' />
              <span>Real-time collaboration</span>
            </div>
          </div>
          <div className='mt-6'>
            <Link
              className='inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              href='#'
            >
              Registrarse
            </Link>
          </div>
        </div>
        <div className='rounded-lg border border-indigo-600 bg-white p-6 shadow-sm dark:border-indigo-600 dark:bg-gray-800'>
          <h3 className='text-2xl font-bold'>Pro</h3>
          <p className='mt-4 text-4xl font-bold'>$9</p>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>per month</p>
          <div className='mt-6 space-y-4'>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Unlimited notes</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Markdown support</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Advanced organization</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Cross-device sync</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Real-time collaboration</span>
            </div>
          </div>
          <div className='mt-6'>
            <Link
              className='inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              href='#'
            >
              Subscribe
            </Link>
          </div>
        </div>
        <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800'>
          <h3 className='text-2xl font-bold'>Enterprise</h3>
          <p className='mt-4 text-4xl font-bold'>Custom</p>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>
            Tailored for your business
          </p>
          <div className='mt-6 space-y-4'>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Unlimited notes</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Markdown support</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Advanced organization</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Cross-device sync</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Real-time collaboration</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Dedicated support</span>
            </div>
            <div className='flex items-center space-x-2'>
              <CheckIcon className='h-5 w-5 text-indigo-600' />
              <span>Custom integrations</span>
            </div>
          </div>
          <div className='mt-6'>
            <Link
              className='inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              href='#'
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
