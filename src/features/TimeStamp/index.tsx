import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { useGetDay, useTime } from '../../usecases/useTime';
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';

const TimeStamp = () => {
  const time = useTime(1000);
  const { year, month, day, dayOfWeek } = useGetDay();

  return (
    <>
      <div className='flex flex-row'>
        <Card className='basis-8/12 m-height'>
          <CardTitle>
            {year}年{month}月{day}日
          </CardTitle>
          <CardContent>
            <div className='flex justify-center items-center py-8'>
              <p className='text-3xl'>{dayOfWeek}曜日</p>
              <p className='text-4xl'>{dayjs(time).format('HH:mm:ss')}</p>
            </div>
          </CardContent>
        </Card>
        <Button size={'fullHeight'} className='basis-4/12 ml-4'>
          打刻
        </Button>
      </div>
    </>
  );
};

export default TimeStamp;
