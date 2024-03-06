import React from 'react';
import {render} from '@testing-library/react';
import Search from './Search';

jest.mock('../../components/project/Projects', () => () => {
    return 'Projects';
});

describe('Search Component', () => {
    it('matches the snapshot', () => {
        const {container} = render(<Search />);

        expect(container).toMatchSnapshot();
    });
});


