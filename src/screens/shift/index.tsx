'use client';

import { useAuthContext } from '@/context/AuthContext';
import { ShiftCalendar } from '@/features/ShiftCalendar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Screen: React.FC = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/');
  }, [user]);

  return (
    <>
      <div className='my-20'>
        <ShiftCalendar />
      </div>
    </>
  );
};
