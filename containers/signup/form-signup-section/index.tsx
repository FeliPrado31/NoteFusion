import { Checkbox } from '@/components/ui/checkbox';
import { Chrome, Github } from 'lucide-react';

export default function FormSignUpSection() {
  return (
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
          I agree to the&nbsp;
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
        <button
          className='mr-4 inline-flex items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          type='button'
        >
          <Chrome className='mr-2 h-5 w-5' />
          Sign up with Google
        </button>
        <button
          className='inline-flex items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          type='button'
        >
          <Github className='mr-2 h-5 w-5' />
          Sign up with GitHub
        </button>
      </div>
    </form>
  );
}
