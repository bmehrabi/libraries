import {fireEvent, render, screen, within} from '@testing-library/react';
import React from 'react';
import Orders from './Orders';

describe('Order Component', () => {
  it('shows the second page of data after clicking on change page', () => {
    render(<Orders />);

    expect(screen.getByText('Elvis Presley')).toBeInTheDocument();
    expect(screen.queryByText('Tom Scholz 5')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTitle('Go to next page'));

    expect(screen.queryByText('Elvis Presley')).not.toBeInTheDocument();
    expect(screen.getByText('Tom Scholz 5')).toBeInTheDocument();
  });

  it('changes the table data on pagination change', () => {
    render(<Orders />);
    expect(screen.queryByText('Tom Scholz 5')).not.toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole('combobox'));

    const listBox = within(screen.getByRole('listbox'));

    fireEvent.click(listBox.getByText('10'));

    expect(screen.getByText('Tom Scholz 5')).toBeInTheDocument();
    // does not show the 11th item when pagination is 10
    expect(screen.queryByText('Bruce Springsteen')).not.toBeInTheDocument();
  });
})