import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/project/Projects', () => () => {
  return 'Projects';
});

describe('App Component', () => {
  it('renders "Wire App" text inside the app', () => {
    render(<App />);

    const dashboardTexts = screen.queryAllByText('Wire App');
    expect(dashboardTexts[0]).toBeInTheDocument();
  });
});