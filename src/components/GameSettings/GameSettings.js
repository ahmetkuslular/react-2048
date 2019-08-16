import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

GameSettings.propTypes = {
  selectedTheme: PropTypes.string,
  changeTheme: PropTypes.func,
};

GameSettings.defaultProps = {
  selectedTheme: 'light',
};

function GameSettings({ selectedTheme, changeTheme }) {
  return (
    <Wrapper>
      <MoonButton onClick={changeTheme}>
        {selectedTheme === 'light' ? (
          <span role="img" aria-label={selectedTheme}>
            🌒
          </span>
        ) : (
          <span role="img" aria-label={selectedTheme}>
            🌔
          </span>
        )}
      </MoonButton>
      <Button>
        <Label>New Game</Label>
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MoonButton = styled.button`
  background-color: transparent;
  padding: 5px;
  text-transform: capitalize;
  font-size: 32px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Button = styled.button`
  min-width: 100px;
  text-align: center;
  justify-content: center;
  background-color: ${props => props.theme.primaryColor};
  padding: 5px;
  text-transform: capitalize;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Label = styled.div`
  color: ${props => props.theme.labelColor};
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
`;

export default GameSettings;
