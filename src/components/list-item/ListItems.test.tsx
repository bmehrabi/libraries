import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {mainListItems} from './ListItems';

test('matches the snapshot', () => {
    const {container} = render(<BrowserRouter>{mainListItems}</BrowserRouter>);

    expect(container).toMatchSnapshot();
});
