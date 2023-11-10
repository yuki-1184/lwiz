import { styled } from '@stitches/react';

type Props = {
  name: string;
};

export const CustomHeader = ({ name }: Props) => {
  return (
    <StyledNavbar>
      <div className='text-xl font-bold'>MyApp</div>
      <StyledNavList>
        <StyledNavItem>
          <a href='/' className='text-gray-600 hover:text-gray-800'>
            Home
          </a>
        </StyledNavItem>
        <StyledNavItem>
          <a href='/about' className='text-gray-600 hover:text-gray-800'>
            About
          </a>
        </StyledNavItem>
        <StyledNavItem>
          <a href='/contact' className='text-gray-600 hover:text-gray-800'>
            Contact
          </a>
        </StyledNavItem>
      </StyledNavList>
      Expected 1 arguments, but got 2.
    </StyledNavbar>
  );
};

const StyledNavbar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const StyledNavList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const StyledNavItem = styled('li', {});
