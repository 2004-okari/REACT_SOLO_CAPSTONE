import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

describe('Navigation displays correctly', () => {
  test('Navigation file matches snapshot', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
