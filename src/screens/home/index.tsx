import { CustomHeader } from '@/features/CustomHeader/presentations';
import SidebarPresentation from '@/features/Sidebar';

export const Screen: React.FC = () => {
  return (
    <>
      <CustomHeader name='Satoki' />
      <SidebarPresentation></SidebarPresentation>
    </>
  );
};
