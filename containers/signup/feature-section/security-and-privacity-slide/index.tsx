import Link from 'next/link';

export default function SecurityAndPrivacitySlide() {
  return (
    <>
      <article>
        <h3 className='text-lg font-medium text-gray-900 dark:text-gray-50'>
          Security and Privacy
        </h3>
        <p className='mt-2 text-base text-gray-600 dark:text-gray-400'>
          At NoteFusion 📝, we take security and privacy seriously. Your data is
          encrypted and stored securely, and we never share your information
          with third parties. You can read our full&nbsp;
          <Link
            className='font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
            href='#'
          >
            Privacy Policy
          </Link>
          .
        </p>
      </article>
    </>
  );
}
