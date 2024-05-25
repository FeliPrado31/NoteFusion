import Image from 'next/image';
import Link from 'next/link';

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <footer className='bg-gray-900 text-white font-sans py-6 mt-10'>
      <div className='container mx-auto px-4 mt-6 flex justify-center items-center'>
        <ul className='flex space-x-8'>
          <li>
            <Link href='/privacy-policy'>Privacy Policy</Link>
          </li>
          <li>
            <Link href='/terms-of-service'>Terms of Service</Link>
          </li>
        </ul>
      </div>

      <div className='container mx-auto px-4 mt-6 flex justify-center items-center'>
        <ul className='flex space-x-8'>
          <li>
            <Link
              href='https://twitter.com/NoteGenie'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/twitter.svg'
                alt='Twitter'
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link
              href='https://facebook.com/NoteGenie'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/facebook.svg'
                alt='Facebook'
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link
              href='https://instagram.com/NoteGenie'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/icons/instagram.svg'
                alt='Instagram'
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>

        <p className='text-center mt-4'>
          Copyright © 2023 NoteGenie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
