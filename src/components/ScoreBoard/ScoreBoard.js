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
  color: ${props => props.theme.labelColor};
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
  background-color: ${props => props.theme.primaryColor};
  margin-left: 5px;
  padding: 5px;
  border-radius: 5px;
`;

const Label = styled.div`
  color: ${props => props.theme.labelColor};
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
  text-transform: uppercase;
`;

const Score = styled.div`
  color: ${props => props.theme.white};
  font-weight: bold;
  font-size: 30px;
  left: 0;
`;

export default ScoreBoard;
