import React from 'react';
import styled from 'styled-components';

function Game({ cells, size }) {
  return (
    <Wrapper>
      <Grid size={size}>
        {Array.from(new Array(size * size), (_, i) => i).map(i => (
          <Box key={i} />
        ))}
      </Grid>
      <Playground size={size}>
        {cells.map((row, y) =>
          row.map((value, x) => {
            if (value === 0) return null;

            return (
              <Cell key={`key_${x}_${y}`} x={x + 1} y={y + 1}>
                {value}
              </Cell>
            );
          }),
        )}
      </Playground>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: #bbada0;
  height: 380px;
  width: 380px;
  padding: 10px;
`;

const Grid = styled.div`
  height: 380px;
  width: 380px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
  position: absolute;
`;

const Box = styled.div`
  background-color: #cdc1b3;
  color: #fff;
  border-radius: 5px;
`;

const Playground = styled(Grid)`
  background-color: transparent;
`;

const Cell = styled.div`
  grid-column: ${({ x }) => x} / ${({ x }) => x + 1};
  grid-row: ${({ y }) => y} / ${({ y }) => y + 1};

  background-color: #f8f7f7;
  color: #6a4e4e;
  border-radius: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
`;

export default Game;
