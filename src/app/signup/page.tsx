/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oJunSns1oRb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import HeaderSection from '../../../containers/signup/header-section';
import FormSignUpSection from '../../../containers/signup/form-signup-section';
import FeatureSection from '../../../containers/signup/feature-section';
import FooterSection from '../../../containers/signup/footer-section';

export default function SignUpPage() {
  return (
    <main>
      <div className='flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-950'>
        <div className='w-full max-w-md space-y-8'>
          <HeaderSection />
          <FormSignUpSection />
        </div>
      </div>
      <section className='bg-gray-100 py-12 dark:bg-gray-950'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <FeatureSection />
          </div>
        </div>
      </section>
      <footer className='bg-gray-900 py-6 dark:bg-gray-800'>
        <FooterSection />
      </footer>
    </main>
  );
}
