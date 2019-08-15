import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import ScoreBoard from 'components/ScoreBoard';
import GameSettings from 'components/GameSettings';
import Game from 'components/Game';

import gameInit from 'controller/gameInit';
import move from 'controller/move';
import { mapKeyCodeToDirection } from 'controller/directios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: gameInit(4),
      score: 0,
      size: 4,
    };
  }

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
      const { cells, score } = move(this.state.cells, mapKeyCodeToDirection[event.code]);
      this.setState({
        cells,
        score,
      });
    }
  };
  render() {
    const { cells, score, size } = this.state;
    return (
      <Container>
        <Wrapper>
          <ScoreBoard score={score} />
          <GameSettings />
        </Wrapper>
        <Wrapper>
          <Game cells={cells} size={size} />
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
