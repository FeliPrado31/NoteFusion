import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import Image from 'next/image';

interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = () => {
  return (
    <div className='container mx-auto max-w-screen-lg text-center'>
      <h1 className='text-4xl font-bold mb-6'>Toma notas como nunca antes</h1>
      <p className='text-lg leading-relaxed mb-8'>
        Markdown, organización avanzada y sincronización entre dispositivos
      </p>
      <Button>Registrarse gratis</Button>
      <Image
        src='https://images.unsplash.com/photo-1629461461750-ef5b81781bc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt={''}
        width={2070}
        height={1380}
      ></Image>
    </div>
  );
};

export default MainSection;
