import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useGetDay, useTime } from '../../usecases/useTime';
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';

const TimeStamp = () => {
  const time = useTime(60000);
  const { year, month, day, dayOfWeek } = useGetDay();

  return (
    <>
      <div className='flex flex-row'>
        <Card className='basis-9/12 m-height'>
          <CardTitle>
            {year}年{month}月{day}日
          </CardTitle>
          <CardContent>
            <div className='flex justify-center items-center py-8'>
              <p className='text-3xl'>{dayOfWeek}曜日</p>
              <p className='text-5xl pl-4'>{dayjs(time).format('HH:mm')}</p>
            </div>
          </CardContent>
        </Card>
        <Button size={'fullHeight'} className='basis-3/12 ml-4'>
          打刻
        </Button>
      </div>
    </>
  );
};

export default TimeStamp;
