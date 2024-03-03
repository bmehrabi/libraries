import React from 'react';
import {render} from '@testing-library/react';
import Search from './Search';

test('matches the snapshot', () => {
    const {container} = render(<Search />);

    expect(container).toMatchSnapshot();
});
