import React from 'react';
import {render} from '@testing-library/react';
import PageLayout from './PageLayout';
import {BrowserRouter} from 'react-router-dom';

test('matches the snapshot', () => {
    const {container} = render(
      <BrowserRouter>
          <PageLayout />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
});
