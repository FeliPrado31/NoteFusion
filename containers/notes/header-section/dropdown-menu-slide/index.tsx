'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

export default function DropdownMenuSlide() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800'
          size='icon'
          variant='ghost'
        >
          <span className='sr-only'>Menú de usuario</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Configuración</DropdownMenuItem>
        <DropdownMenuItem>Soporte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
