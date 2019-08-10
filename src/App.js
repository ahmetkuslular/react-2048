import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Container from 'components/Container';
import ScoreBoard from 'components/ScoreBoard';
import GameSettings from 'components/GameSettings';
import Game from "components/Game";

class App extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ScoreBoard />
          <GameSettings />
        </Wrapper>
        <Wrapper>
          <Game />
        </Wrapper>
      </Container>
    );
  }
}

const Wrapper = styled.div`
  flex:1;
  padding: 10px;
  flex-direction: column;
`;

export default App;
