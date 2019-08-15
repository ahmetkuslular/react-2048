import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Container from 'components/Container';
import ScoreBoard from 'components/ScoreBoard';
import GameSettings from 'components/GameSettings';
import Game from 'components/Game';
import { directions, keyPressed, setup } from './controller';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: setup(),
      score: 0,
    };
  }

  mapKeyCodeToDirection = {
    KeyA: directions.LEFT,
    KeyS: directions.DOWN,
    KeyD: directions.RIGHT,
    KeyW: directions.UP,
    ArrowLeft: directions.LEFT,
    ArrowDown: directions.DOWN,
    ArrowRight: directions.RIGHT,
    ArrowUp: directions.UP,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = async event => {
    if (
      ['KeyA', 'KeyS', 'KeyD', 'KeyW', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'].includes(
        event.code,
      )
    ) {
      const { grid, score } = keyPressed(this.mapKeyCodeToDirection[event.code]);
      this.setState({
        cells: grid,
        score,
      });
    }
  };
  render() {
    const { cells, score } = this.state;
    return (
      <Container>
        <Wrapper>
          <ScoreBoard score={score} />
          <GameSettings />
        </Wrapper>
        <Wrapper>
          <Game cells={cells} />
        </Wrapper>
      </Container>
    );
  }
}

const Wrapper = styled.div`
  flex: 1;
  padding: 10px;
  flex-direction: column;
`;

export default App;
