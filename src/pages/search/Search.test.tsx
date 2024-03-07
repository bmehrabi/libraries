import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Search from './Search';
import {IProjectProps} from 'src/components/project/typings';

jest.mock('src/components/project/Projects', () => ({query, sort}: IProjectProps) => {
    return `Projects: query: ${query} sort: ${sort}`;
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
            expect(screen.getByText('Projects: query: test sort: false')).toBeInTheDocument();
        });
    });

    it('uses the sort field boolean to load the projects', async () => {
        render(<Search />);

        const input = screen.getByLabelText(/search/i);
        fireEvent.change(input, {target: {value: 'test'}});

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        await waitFor(() => {
            expect(screen.getByText('Projects: query: test sort: true')).toBeInTheDocument();
        });
    });
});


