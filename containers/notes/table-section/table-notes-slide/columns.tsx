'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { DeleteIcon, ShareIcon, TrashIcon } from 'lucide-react';

export type Note = {
  title: string;
  date: string;
  tags: string[];
  folder: string;
};

export const columns: ColumnDef<Note>[] = [
  {
    accessorKey: 'title',
    header: 'Título',
  },
  {
    accessorKey: 'date',
    header: 'Fecha',
  },
  {
    accessorKey: 'tags',
    header: 'Etiquetas',
  },
  {
    accessorKey: 'folder',
    header: 'Carpeta',
  },
  {
    accessorKey: 'actions',
    header: 'Acciones',
    cell: ({ row }) => {
      const note = row.original as Note;

      return (
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon'>
            <DeleteIcon className='h-4 w-4' />
            <span className='sr-only'>Editar</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <ShareIcon className='h-4 w-4' />
            <span className='sr-only'>Compartir</span>
          </Button>
          <Button variant='ghost' size='icon'>
            <TrashIcon className='h-4 w-4' />
            <span className='sr-only'>Eliminar</span>
          </Button>
        </div>
      );
    },
  },
];
