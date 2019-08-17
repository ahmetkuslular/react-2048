
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import ScoreBoard from './ScoreBoard';

describe('components/ScoreBoard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScoreBoard />, div);
  });

  it('renders markup correctly', () => {
    const tree = toJson(render(<ScoreBoard score={12} bestScore={20148}/>));
    expect(tree).toMatchSnapshot();
  });
});

