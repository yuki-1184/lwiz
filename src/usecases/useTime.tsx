import { useEffect, useState } from 'react';

export const useTime = (interval: number) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timeoutId = setTimeout(() => setTime(Date.now()), interval);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  return time;
};

export const useGetDay = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const week = date.getDay();
  const weekItems = ['日', '月', '火', '水', '木', '金', '土'];
  const dayOfWeek = weekItems[week];

  return { year, month, day, dayOfWeek };
};
