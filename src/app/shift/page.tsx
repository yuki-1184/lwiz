'use client';

import { useAuthContext } from '@/context/AuthContext';
import { ShiftCalendar } from '@/features/ShiftCalendar';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {};

const Shift = () => {
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

export default Shift;
