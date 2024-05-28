/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oJunSns1oRb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  return (
    <>
      <div className='flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-950'>
        <div className='w-full max-w-md space-y-8'>
          {/* Encabezado */}
          <div>
            <Image
              alt='NoteGenie'
              className='mx-auto h-12 w-auto'
              src='/placeholder.svg'
              width={48}
              height={48}
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50'>
              Sign up for NoteGenie
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-400'>
              Create your account to start taking notes with ease.
            </p>
          </div>
          {/* Form de registro */}
          <form action='#' className='space-y-6' method='POST'>
            <div>
              <label
                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                htmlFor='name'
              >
                Full Name
              </label>
              <div className='mt-1'>
                <input
                  autoComplete='name'
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500'
                  id='name'
                  name='name'
                  required
                  type='text'
                />
              </div>
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                htmlFor='email'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  autoComplete='email'
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500'
                  id='email'
                  name='email'
                  required
                  type='email'
                />
              </div>
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                htmlFor='password'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  autoComplete='new-password'
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-500'
                  id='password'
                  name='password'
                  required
                  type='password'
                />
              </div>
            </div>
            <div className='flex items-center'>
              <Checkbox id='terms' />
              <label
                className='ml-2 block text-sm text-gray-900 dark:text-gray-300'
                htmlFor='terms'
              >
                I agree to the
                <a
                  className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
                  href='#'
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            <div>
              <button
                className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400'
                type='submit'
              >
                Sign Up
              </button>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <button
                  className='mr-4 inline-flex items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  type='button'
                >
                  <Image
                    alt='Google'
                    className='mr-2 h-5 w-5'
                    src='/placeholder.svg'
                    width={48}
                    height={48}
                  />
                  Sign up with Google
                </button>
                <button
                  className='inline-flex items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  type='button'
                >
                  <Image
                    alt='GitHub'
                    className='mr-2 h-5 w-5'
                    src='/placeholder.svg'
                    width={48}
                    height={48}
                  />
                  Sign up with GitHub
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-gray-100 py-12 dark:bg-gray-950'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {/* Sección de seguridad y privacidad */}
            <div>
              <h3 className='text-lg font-medium text-gray-900 dark:text-gray-50'>
                Security and Privacy
              </h3>
              <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>
                At NoteGenie, we take security and privacy seriously. Your data
                is encrypted and stored securely, and we never share your
                information with third parties. You can read our full&nbsp;
                <Link
                  className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
                  href='#'
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            {/* Seccion de planes y precios */}
            <div>
              <h3 className='text-lg font-medium text-gray-900 dark:text-gray-50'>
                Subscription Plans
              </h3>
              <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>
                NoteGenie offers a range of subscription plans to fit your
                needs. Check out our&nbsp;
                <a
                  className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
                  href='#'
                >
                  Pricing
                </a>
                &nbsp;page to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className='bg-gray-900 py-6 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='mb-4 md:mb-0'>
              <p className='text-sm text-gray-400'>
                © 2024 NoteGenie. All rights reserved.
              </p>
            </div>
            <div className='flex space-x-6'>
              <a className='text-sm text-gray-400 hover:text-gray-300' href='#'>
                Terms of Service
              </a>
              <a className='text-sm text-gray-400 hover:text-gray-300' href='#'>
                Privacy Policy
              </a>
              <a className='text-sm text-gray-400 hover:text-gray-300' href='#'>
                Twitter
              </a>
              <a className='text-sm text-gray-400 hover:text-gray-300' href='#'>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
