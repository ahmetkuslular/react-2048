import React from 'react';
import styled from 'styled-components';

function Container({ children }) {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
}

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  background-color: ${props => props.theme.background};
`;

const Content = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
`;

export default Container;
