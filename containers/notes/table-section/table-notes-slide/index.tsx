import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Table, DeleteIcon, ShareIcon, TrashIcon } from 'lucide-react';
import { Note, columns } from './columns';
import { DataTable } from './data-table';

export const notes: Note[] = [
  {
    title: 'Reunión de equipo',
    date: '20 de mayo de 2023',
    tags: ['Reunión', 'Equipo'],
    folder: 'Trabajo',
  },
  {
    title: 'Idea de proyecto',
    date: '12 de abril de 2023',
    tags: ['Creatividad'],
    folder: 'Personal',
  },
  {
    title: 'Receta de cocina',
    date: '3 de marzo de 2023',
    tags: ['Recetas', 'Importante'],
    folder: 'Personal',
  },
  {
    title: 'Resumen de libro',
    date: '28 de febrero de 2023',
    tags: ['Lectura'],
    folder: 'Personal',
  },

  // ...
];

export default function TableNotesSlide() {
  return <DataTable columns={columns} data={notes} />;
}
