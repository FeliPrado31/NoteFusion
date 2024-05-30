import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import { NotebookIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import DropdownMenuSlide from './dropdown-menu-slide';

export default function HeaderSection() {
  return (
    <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
      <Link className='lg:hidden' href='#'>
        <NotebookIcon className='h-6 w-6' />
        <span className='sr-only'>Notas</span>
      </Link>
      <div className='w-full flex-1'>
        <form>
          <div className='relative'>
            <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
            <Input
              className='w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950'
              placeholder='Buscar notas...'
              type='search'
            />
          </div>
        </form>
      </div>
      <DropdownMenuSlide />
    </header>
  );
}
