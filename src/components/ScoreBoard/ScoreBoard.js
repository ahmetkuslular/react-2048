import React from 'react';
import styled from 'styled-components';

function ScoreBoard({ score }) {
  return (
    <Wrapper>
      <GameNameLabel>2048</GameNameLabel>
      <Scores>
        <Box>
          <Label>Score</Label>
          <Score>{score}</Score>
        </Box>
        <Box>
          <Label>Best</Label>
          <Score>10000</Score>
        </Box>
      </Scores>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GameNameLabel = styled.div`
  font-weight: bold;
  font-size: 4em;
  text-align: center;
  color: #776e65;
`;

const Scores = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Box = styled.div`
  min-width: 75px;
  text-align: center;
  justify-content: center;
  color: white;
  background-color: #bbada0;
  margin-left: 5px;
  padding: 5px;
  border-radius: 5px;
`;

const Label = styled.div`
  color: #ede4da;
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
  text-transform: uppercase;
`;

const Score = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  left: 0;
`;

export default ScoreBoard;