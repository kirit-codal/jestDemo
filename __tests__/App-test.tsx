/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App Test', () => {
  test('should ', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly', () => {
    renderer.create(<App />);
  });
});
