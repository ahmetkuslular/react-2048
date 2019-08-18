import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Game from './Game';

const mockCells = [[0, 0, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 4, 0, 0]];
describe('components/GameSettings', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game size={4} cells={mockCells} />, div);
  });

  //TODO: correctly testing
});
