import { Button } from '@/components/ui/button';
import { DeleteIcon, SaveIcon, ShareIcon, SettingsIcon } from 'lucide-react';

export default function HeaderSection() {
  return (
    <header className='bg-gray-950 px-4 py-2 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <DeleteIcon className='h-5 w-5' />
          <h1 className='text-lg font-medium'>NoteFusion</h1>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            className='text-gray-400 hover:text-white'
            size='icon'
            variant='ghost'
          >
            <SaveIcon className='h-5 w-5' />
            <span className='sr-only'>Save</span>
          </Button>
          <Button
            className='text-gray-400 hover:text-white'
            size='icon'
            variant='ghost'
          >
            <ShareIcon className='h-5 w-5' />
            <span className='sr-only'>Share</span>
          </Button>
          <Button
            className='text-gray-400 hover:text-white'
            size='icon'
            variant='ghost'
          >
            <SettingsIcon className='h-5 w-5' />
            <span className='sr-only'>Settings</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
