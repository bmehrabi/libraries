import {fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import React from 'react';
import Projects from './Projects';
import {IProjectModel} from './typings';
import fetch from 'jest-fetch-mock';

describe('Project Component', () => {
  const createSampleProject = (index: number): IProjectModel => ({
      licenses: 'MIT ' + index,
      name: 'Project ' + index,
      repository_url: `https://url_${index}.com`,
      stars: index,
  });
  const rows: IProjectModel[] = [...Array(11).keys()].map((idx) => createSampleProject(idx + 1));

  beforeEach(() => {
    fetchMock.enableMocks();
    fetchMock.doMock();
  });

  it('shows the second page of projects after clicking on go to next page button', async () => {
    fetch.mockResponseOnce(JSON.stringify(rows));

    render(<Projects query="query" />);

    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });

    expect(screen.queryByText('Project 6')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Go to next page'));

    expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
    expect(screen.getByText('Project 6')).toBeInTheDocument();
  });

  it('changes the projects table data on pagination change', async () => {
    fetch.mockResponseOnce(JSON.stringify(rows));

    render(<Projects query="query" />);

    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });

    expect(screen.queryByText('Project 10')).not.toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole('combobox'));

    const listBox = within(screen.getByRole('listbox'));

    fireEvent.click(listBox.getByText('10'));

    expect(screen.getByText('Project 10')).toBeInTheDocument();
  });

  it('can handle network errors', async () => {
    fetch.mockReject(new Error('network error'));

    jest.spyOn(console, 'error').mockImplementation(jest.fn());

    render(<Projects query="query" />);

    await waitFor(() => {
      expect(console.error).toBeCalledTimes(1);
    });

    expect(console.error).toBeCalledWith('Error: network error');
  });

  it('can handle wrong formatted API response', async () => {
    fetch.mockResponseOnce('{}', { status: 500, headers: { 'content-type': 'application/json' } });

    jest.spyOn(console, 'error').mockImplementation(jest.fn());

    render(<Projects query="query" />);

    await waitFor(() => {
      expect(console.error).toBeCalledTimes(1);
    });

    expect(console.error).toBeCalledWith('Error: Network response was not OK.');
  });

  it('shows a message to users when search query length is too short', () => {
    render(<Projects query="12" />);

    expect(screen.getByText('Please enter a search query inside search field (at least 3 letters).'))
      .toBeInTheDocument();
  });
});