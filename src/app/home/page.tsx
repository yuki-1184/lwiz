'use client';

import styled from 'styled-components';
import { Flex } from '@radix-ui/themes';

type Props = {};

const Home = () => {
  return (
    <Flex>
      <p>hello world</p>
    </Flex>
  );
};

const HelloWorld = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export default Home;
