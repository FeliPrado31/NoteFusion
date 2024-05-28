import { Textarea } from '@/components/ui/textarea';

export default function NotesEditorSection() {
  return (
    <section className='rounded-lg bg-white p-4 shadow-md dark:bg-gray-900'>
      <Textarea
        className='h-full w-full resize-none border-none bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none dark:text-gray-100'
        placeholder='Start writing your note...'
      />
    </section>
  );
}
