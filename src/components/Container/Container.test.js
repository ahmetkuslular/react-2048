import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Container from './Container';

describe('components/Container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Container />, div);
  });

  it('renders markup correctly', () => {
    const tree = toJson(render(<Container>Children</Container>));
    expect(tree).toMatchSnapshot();
  });
});
