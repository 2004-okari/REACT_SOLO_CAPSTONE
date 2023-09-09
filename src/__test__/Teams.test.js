import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Teams from '../components/Teams';

const mockStore = configureMockStore([]);

describe('Teams component works okay', () => {
  test('Teams renders correctly', () => {
    const store = mockStore({
      teams: {
        teams: [],
      },
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Teams />
        </Provider>,
      );

    expect(tree).toMatchSnapshot();
  });
});
