import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <div className='container max-w-5xl px-4 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h4 className='text-lg font-medium mb-4'>Company</h4>
          <ul className='space-y-2'>
            <li>
              <Link href='#'>About</Link>
            </li>
            <li>
              <Link href='#'>Careers</Link>
            </li>
            <li>
              <Link href='#'>Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-medium mb-4'>Legal</h4>
          <ul className='space-y-2'>
            <li>
              <Link href='#'>Terms of Service</Link>
            </li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='#'>Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-medium mb-4'>Follow Us</h4>
          <div className='flex space-x-4'>
            <Link
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#'
            >
              <TwitterIcon className='h-6 w-6' />
            </Link>
            <Link
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#'
            >
              <FacebookIcon className='h-6 w-6' />
            </Link>
            <Link
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#'
            >
              <InstagramIcon className='h-6 w-6' />
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center text-sm'>
        © 2024 NoteFusion 📝. All rights reserved.
      </div>
    </div>
  );
};

export default FooterSection;
