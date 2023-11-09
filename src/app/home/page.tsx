'use client';

import styled from 'styled-components';

type Props = {};

const Home = () => {
  return (
    <HelloWorld>
      <p>hello world</p>
    </HelloWorld>
  );
};

const HelloWorld = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export default Home;
