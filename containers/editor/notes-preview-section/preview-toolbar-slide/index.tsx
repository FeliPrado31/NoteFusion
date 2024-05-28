import { Button } from '@/components/ui/button';
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  CodeIcon,
} from 'lucide-react';

export default function PreviewToolbarSlide() {
  return (
    <article className='flex items-center justify-between pb-2'>
      <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
        Preview
      </h2>
      <div className='flex items-center gap-2'>
        <Button
          className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          size='icon'
          variant='ghost'
        >
          <BoldIcon className='h-5 w-5' />
          <span className='sr-only'>Bold</span>
        </Button>
        <Button
          className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          size='icon'
          variant='ghost'
        >
          <ItalicIcon className='h-5 w-5' />
          <span className='sr-only'>Italic</span>
        </Button>
        <Button
          className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          size='icon'
          variant='ghost'
        >
          <StrikethroughIcon className='h-5 w-5' />
          <span className='sr-only'>Strikethrough</span>
        </Button>
        <Button
          className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          size='icon'
          variant='ghost'
        >
          <CodeIcon className='h-5 w-5' />
          <span className='sr-only'>Code</span>
        </Button>
      </div>
    </article>
  );
}
