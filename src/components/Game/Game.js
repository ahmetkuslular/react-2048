import React, { Component } from 'react';
import styled from 'styled-components';

class Game extends Component {
  render() {
    const cells = [
      { id: '1', state: 'IDLE', value: 2, x: 3, y: 1 },
      { id: '2', state: 'IDLE', value: 2, x: 0, y: 1 },
    ];
    return (
      <Wrapper>
        <Grid>
          {Array.from(new Array(16), (_, i) => i).map(i => (
            <Box key={i} />
          ))}
        </Grid>
        <Playground>
          {cells.map(({ id, x, y, value }) => (
            <Cell key={id} x={x} y={y} value={value}>
              2018
            </Cell>
          ))}
        </Playground>
      </Wrapper>
    );
  }
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  position: absolute;
`;

const Box = styled.div`
  background-color: #cdc1b3;
  color: #fff;
  border-radius: 5px;
  font-size: 150%;
`;

const Playground = styled(Grid)`
  background-color: transparent;
`;

const Cell = styled.div`
  grid-column: ${({ x }) => x} / ${({ x }) => x + 1};
  grid-row: ${({ y }) => y} / ${({ y }) => y + 1};
  background-color: #f10;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
`;

export default Game;
