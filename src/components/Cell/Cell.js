import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontSizeCalculater } from 'helpers';

Cell.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.string,
};

Cell.defaultProps = {
  color: 'secondaryColor',
};

function Cell({ x, y, value, color, ...rest }) {
  let cellStyle = {};
  if (x && y) {
    cellStyle = {
      gridColumn: `${x}/${x + 1}`,
      gridRow: `${y}/${y + 1}`,
      fontSize: fontSizeCalculater(value),
    };
  }

  let backgroundColor = value ? `cellColor_${value}` : color;

  return (
    <Box x={x} y={y} value={value} style={cellStyle} backgroundColor={backgroundColor}>
      {value}
    </Box>
  );
}

const Box = styled.div`
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor] || theme.cellColor};
  color: ${({ theme, value }) => (value < 8 ? theme.cellLabel : theme.white)};
  border-radius: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  font-weight: bold;
`;

export default Cell;
