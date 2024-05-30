import { Button } from '@/components/ui/button';

export default function TittleAndAddNoteSlide() {
  return (
    <div className='flex items-center'>
      <h1 className='font-semibold text-lg md:text-2xl'>Mis notas</h1>
      <Button className='ml-auto' size='sm'>
        Nueva nota
      </Button>
    </div>
  );
}
