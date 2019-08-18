import React from 'react';
import styled from 'styled-components';

function GameOver() {
  return (
    <Wrapper>
      <Content>
        <p>Game Over!</p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};;
  opacity: 0.7;
`;

const Content = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 50px;
  color: ${({ theme }) => theme.primaryColor};
`;

export default GameOver;
