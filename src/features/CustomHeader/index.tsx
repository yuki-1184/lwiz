'use client';
import { Button } from '@/components/ui/button';
import { Flex, Text } from '@radix-ui/themes';
import { GearIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/custom/mode-toggle';

type Props = {
  name: string;
};

export const CustomHeader = ({ name }: Props) => {
  const handleGearIconClick = () => {
    console.log('Gear Icon Clicked');
  };

  const handleAvatarClick = () => {
    console.log('Avatar Clicked');
  };

  return (
    <header className='py-2 border-b border-border backdrop-blur-sm bg-secondary'>
      <div className='container'>
        <Flex direction={'row'} justify={'between'} align={'center'}>
          <Text size={'4'}>ダッシュボード</Text>
          <Flex direction={'row'} gap={'4'} align={'center'}>
            <ModeToggle />
            <Button variant={'ghost'} size={'icon'} onClick={handleGearIconClick}>
              <GearIcon width={'24px'} height={'24px'} />
            </Button>
            <Avatar onClick={handleAvatarClick}>
              <AvatarImage src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Flex>
        </Flex>
      </div>
    </header>
  );
};
