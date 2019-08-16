import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Game.propTypes = {
  cells: PropTypes.array.isRequired,
  size: PropTypes.number,
  theme: PropTypes.string,
};

Game.defaultProps = {
  size: 4,
  theme: 'light',
};

function Game({ cells, size, theme }) {
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

const Box = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  border-radius: 5px;
`;

const Playground = styled(Grid)`
  background-color: transparent;
`;

const Cell = styled.div`
  grid-column: ${({ x }) => x} / ${({ x }) => x + 1};
  grid-row: ${({ y }) => y} / ${({ y }) => y + 1};

  background-color: ${props => props.theme[`cellColor_${props.value}`]};
  color: ${({ theme, value }) => (value < 8 ? theme.cellLabel : theme.white)};
  border-radius: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ value }) => (value < 100 ? 55 : value < 1000 ? 40 : value < 10000 ? 35 : 25)}px;
  font-weight: bold;
`;

export default Game;
