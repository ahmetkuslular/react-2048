import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Container from 'components/Container';
import ScoreBoard from 'components/ScoreBoard';
import GameSettings from 'components/GameSettings';
import Game from 'components/Game';

import gameInit from 'controller/gameInit';
import move from 'controller/move';
import { mapKeyCodeToDirection } from 'constants/directios';
import themes from './themes';
import GameOver from './components/GameOver';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: gameInit(4),
      score: 0,
      size: 4,
      selectedTheme: 'light',
      gameOver: false,
    };
  }

  newGame = () => {
    this.setState(state => ({
      ...state,
      cells: gameInit(state.size),
      score: 0,
      gameOver: false,
    }));
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    const { gameOver } = this.state;
    if (!gameOver && mapKeyCodeToDirection[event.code]) {
      const { cells, score, gameOver} = move(this.state.cells, mapKeyCodeToDirection[event.code]);
      this.setState({
        cells,
        score,
        gameOver
      });
    }
  };

  changeTheme = () => {
    this.setState(state => ({
      ...state,
      selectedTheme: state.selectedTheme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { cells, score, size, selectedTheme, gameOver } = this.state;
    return (
      <ThemeProvider theme={themes[selectedTheme]}>
        <Container>
          <Wrapper>
            <ScoreBoard score={score} />
            <GameSettings
              selectedTheme={selectedTheme}
              changeTheme={this.changeTheme}
              newGame={this.newGame}
            />
          </Wrapper>
          <Wrapper>
            {gameOver && <GameOver />}
            <Game cells={cells} size={size} />
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}

const Wrapper = styled.div`
  flex: 1;
  padding: 10px;
  flex-direction: column;
`;

export default App;
