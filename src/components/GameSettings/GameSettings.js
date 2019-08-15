import React from 'react';
import styled from 'styled-components';

function GameSettings() {
  return (
    <Wrapper>
      <Button>
        <Label>Yeni Oyun</Label>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  min-width: 100px;
  text-align: center;
  justify-content: center;
  color: white;
  background-color: #bbada0;
  padding: 5px;
  text-transform: capitalize;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Label = styled.div`
  color: #ede4da;
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
`;

export default GameSettings;
