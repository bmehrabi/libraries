import React from 'react';
import {render} from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
    it('matches the snapshot', () => {
        const {container} = render(<Search />);

        expect(container).toMatchSnapshot();
    });
});


