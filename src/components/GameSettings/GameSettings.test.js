import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import GameSettings from './GameSettings';

const changeTheme = jest.fn();
describe('components/GameSettings', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameSettings theme="light" changeTheme={changeTheme}/>, div);
  });

  it('renders markup correctly for dark theme', () => {
    const tree = toJson(render(<GameSettings theme="dark" />));
    expect(tree).toMatchSnapshot();
  });

  it('renders markup correctly for light theme', () => {
    const tree = toJson(render(<GameSettings theme="light" />));
    expect(tree).toMatchSnapshot();
  });
});
