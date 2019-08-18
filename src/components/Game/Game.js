import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cell from 'components/Cell';

Game.propTypes = {
  cells: PropTypes.array.isRequired,
  size: PropTypes.number,
  theme: PropTypes.string,
};

Game.defaultProps = {
  size: 4,
  theme: 'light',
};

function BackgroundGrid({ size }) {
  return (
    <Grid size={size}>
      {Array.from(new Array(size * size), (_, i) => i).map(i => (
        <Cell key={i} />
      ))}
    </Grid>
  );
}
function Game({ cells, size }) {
  return (
    <Wrapper>
      <BackgroundGrid size={size} />
      <Playground size={size}>
        {cells.map((row, y) =>
          row.map((value, x) => {
            if (value === 0) return null;
            return (
              <Cell key={`key_${x}_${y}`} x={x + 1} y={y + 1} value={value}>
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
  background-color: ${props => props.theme.primaryColor};
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

const Playground = styled(Grid)`
  background-color: transparent;
`;

export default Game;
