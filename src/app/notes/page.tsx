/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SyNQgEHqLr7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import NavbarSection from '../../../containers/notes/navbar-section';
import HeaderSection from '../../../containers/notes/header-section';
import TableSection from '../../../containers/notes/table-section';

export default function NotesPage() {
  return (
    <div className='grid min-h-screen w-full lg:grid-cols-[280px_1fr]'>
      <NavbarSection />
      <section className='flex flex-col'>
        <HeaderSection />
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          <TableSection />
        </main>
      </section>
    </div>
  );
}
