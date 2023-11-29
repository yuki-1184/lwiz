import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MdCalendarMonth,
  MdOutlineDashboardCustomize,
  MdOutlineTimeline,
  MdOutlinePersonOutline,
} from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { Box, Flex } from '@radix-ui/themes';
const MENU_ITEMS = ['ダッシュボード', 'タイムライン', 'シフト', 'マイページ'];

const getMenuItemIcon = (item: string, size: number) => {
  if (item === 'ダッシュボード') return <MdOutlineDashboardCustomize size={size} />;
  if (item === 'タイムライン') return <MdOutlineTimeline size={size} />;
  if (item === 'シフト') return <MdCalendarMonth size={size} />;
  if (item === 'マイページ') return <MdOutlinePersonOutline size={size} />;
};

const Sidebar: React.FC = () => {
  return (
    <div className='flex flex-col h-screen p-3 shadow w-64 bg-foreground text-primary-foreground border-r border-border sticky top-0'>
      <div className='space-y-3'>
        <div className='flex items-center'>
          <h1 className='text-xl font-bold'>Lwiz</h1>
        </div>
        <div className='flex-1'>
          <ul className='py-4 space-y-1 text-sm'>
            {MENU_ITEMS.map((item, index) => (
              <li className='rounded-sm' key={index}>
                <Link href='/' className='flex items-center py-3 px-2 space-x-3 rounded-md'>
                  {getMenuItemIcon(item, 24)}
                  <span className='font-bold'>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
