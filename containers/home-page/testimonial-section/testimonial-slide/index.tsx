import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
import { FC } from 'react';

interface TestimonialSlide {}

const TestimonialSlide: FC<TestimonialSlide> = () => {
  return (
    <Card className='bg-white rounded-lg h-fit shadow relative'>
      <CardHeader className='space-y-0 flex items-center flex-row justify-between'>
        <div className='flex items-center space-x-4'>
          <Avatar>
            <AvatarImage
              alt='Avatar Image'
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </Avatar>
          <div>
            <p className='text-sm font-semibold'>Avatar User Name</p>
            <p className='text-xs text-muted-foreground'>Avatar User Name</p>
          </div>
        </div>
        <p className='text-xs text-muted-foreground'>12/10/24</p>
      </CardHeader>
      <CardContent>
        <div
          className='text-sm space-y-2'
          dangerouslySetInnerHTML={{
            __html: (
              <p>
                The guide is good, but what really makes it exceptional is the{' '}
                <span>responsive customer support</span>. They really care about
                their users.
              </p>
            ),
          }}
        ></div>
      </CardContent>
      <CardFooter className='space-x-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className='text-amber-500 fill-amber-500'
            aria-hidden='true'
          />
        ))}
        {Array.from({ length: 5 - 1 }).map((_, index) => (
          <StarIcon key={index} className='text-amber-500' aria-hidden='true' />
        ))}
      </CardFooter>
    </Card>
  );
};

export default TestimonialSlide;
