import PreviewSlide from './preview-slide';
import PreviewToolbarSlide from './preview-toolbar-slide';

export default function NotesPreviewSection() {
  return (
    <section className='flex h-full flex-col'>
      <PreviewToolbarSlide />
      <PreviewSlide />
    </section>
  );
}
