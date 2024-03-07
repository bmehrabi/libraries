import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Search from './Search';

jest.mock('src/components/project/Projects', () => (props: {query: string}) => {
    return 'Projects: ' + props.query;
});

describe('Search Component', () => {
    it('matches the snapshot', () => {
        const {container} = render(<Search />);

        expect(container).toMatchSnapshot();
    });

    it('uses the search field value to load the projects', async () => {
        render(<Search />);

        const input = screen.getByLabelText(/search/i);
        fireEvent.change(input, {target: {value: 'test'}});

        await waitFor(() => {
            expect(screen.getByText('Projects: test')).toBeInTheDocument();
        });
    });
});


