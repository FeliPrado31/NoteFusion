import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NotebookIcon, PlusIcon, FolderIcon, TagIcon } from 'lucide-react';
import Link from 'next/link';

export default function NavbarSection() {
  return (
    <nav className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <header className='flex h-[60px] items-center border-b px-6'>
          <Link className='flex items-center gap-2 font-semibold' href='#'>
            <NotebookIcon className='h-6 w-6' />
            <span className=''>Notas</span>
          </Link>
          <Button className='ml-auto h-8 w-8' size='icon' variant='outline'>
            <PlusIcon className='h-4 w-4' />
            <span className='sr-only'>Crear nueva nota</span>
          </Button>
        </header>
        <nav className='flex-1 overflow-auto py-2'>
          <ul className='grid items-start px-4 text-sm font-medium'>
            <li>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <FolderIcon className='h-4 w-4' />
                Todas las notas
              </Link>
            </li>
            <li>
              <Link
                className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
                href='#'
              >
                <FolderIcon className='h-4 w-4' />
                Trabajo
              </Link>
            </li>
            <li>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <FolderIcon className='h-4 w-4' />
                Personal
              </Link>
            </li>
            <li>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <TagIcon className='h-4 w-4' />
                Etiquetas
              </Link>
            </li>
          </ul>
        </nav>
        <div className='mt-auto p-4'>
          <Card>
            <CardHeader className='pb-4'>
              <CardTitle>Crear nueva carpeta</CardTitle>
              <CardDescription>
                Organiza tus notas en carpetas personalizadas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder='Nombre de la carpeta' />
              <Button className='mt-2 w-full' size='sm'>
                Crear
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </nav>
  );
}
