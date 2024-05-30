/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6T5iw8CFsSi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import HeaderSection from '@/../containers/editor/header-section';
import NotesEditorSection from '@/../containers/editor/notes-editor-section';
import NotesPreviewSection from '@/../containers/editor/notes-preview-section';

export default function EditorPage() {
  return (
    <main className='flex h-screen w-full flex-col'>
      <HeaderSection />
      <div className='flex-1 bg-gray-100 dark:bg-gray-950'>
        <div className='container mx-auto grid h-full grid-cols-2 gap-4 p-4'>
          <NotesEditorSection />
          <div className='rounded-lg bg-white p-4 shadow-md dark:bg-gray-900'>
            <NotesPreviewSection />
          </div>
        </div>
      </div>
    </main>
  );
}
