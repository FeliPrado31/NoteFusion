export default function FooterSection() {
  return (
    <>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          <div className='mb-4 md:mb-0'>
            <p className='text-sm text-gray-400'>
              © 2024 NoteFusion 📝. All rights reserved.
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
    </>
  );
}
