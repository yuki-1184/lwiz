import Link from 'next/link';
import {
  MdCalendarMonth,
  MdOutlineDashboardCustomize,
  MdOutlineTimeline,
  MdOutlinePersonOutline,
} from 'react-icons/md';

const MENU_ITEMS = ['ダッシュボード', 'タイムライン', 'シフト', 'マイページ'];

const getMenuItemIcon = (item: string, size: number) => {
  if (item === 'ダッシュボード') return <MdOutlineDashboardCustomize size={size} />;
  if (item === 'タイムライン') return <MdOutlineTimeline size={size} />;
  if (item === 'シフト') return <MdCalendarMonth size={size} />;
  if (item === 'マイページ') return <MdOutlinePersonOutline size={size} />;
};

const Sidebar: React.FC = () => {
  return (
    <div
      className='bg-foreground text-primary-foreground border-r border-border shadow'
      style={{ width: '260px' }}
    >
      <div className='flex flex-col h-screen p-3 w-64'>
        <div className='space-y-3'>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold'>Lwiz</h1>
          </div>
          <div className='flex-1'>
            <ul className='py-4 space-y-1 text-sm'>
              <li className='rounded-sm'>
                <Link href='/' className='flex items-center py-3 px-2 space-x-3 rounded-md'>
                  {getMenuItemIcon('ダッシュボード', 24)}
                  <span className='font-bold'>ダッシュボード</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link href='/home' className='flex items-center py-3 px-2 space-x-3 rounded-md'>
                  {getMenuItemIcon('タイムライン', 24)}
                  <span className='font-bold'>タイムライン（ホーム）</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link href='/shift' className='flex items-center py-3 px-2 space-x-3 rounded-md'>
                  {getMenuItemIcon('シフト', 24)}
                  <span className='font-bold'>シフト</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link href='/mypage' className='flex items-center py-3 px-2 space-x-3 rounded-md'>
                  {getMenuItemIcon('マイページ', 24)}
                  <span className='font-bold'>マイページ</span>
                </Link>
              </li>

              {/* {MENU_ITEMS.map((item, index) => (
                <li className='rounded-sm' key={index}>
                  <Link href='/' className='flex items-center py-3 px-2 space-x-3 rounded-md'>
                    {getMenuItemIcon(item, 24)}
                    <span className='font-bold'>{item}</span>
                  </Link>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
