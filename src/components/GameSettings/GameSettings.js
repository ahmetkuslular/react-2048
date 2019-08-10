import React from 'react';
import styled from 'styled-components';

function GameSettings() {
  return (
    <Wrapper>
      <Box>
        <Label>Yeni Oyun</Label>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top:10px;
`;

const Box = styled.div`
  min-width: 100px;
  text-align: center;
  justify-content: center;
  color: white;
  background-color: #bbada0;
  padding: 5px;
`;

const Label = styled.div`
  color: #ede4da;
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
`;

export default GameSettings;
