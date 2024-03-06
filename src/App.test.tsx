import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/project/Projects', () => () => {
  return 'Projects';
});

describe('App Component', () => {
  it('renders "Dashboard" text inside the app', () => {
    render(<App />);

    const dashboardTexts = screen.queryAllByText('Dashboard');
    expect(dashboardTexts[0]).toBeInTheDocument();
  });
});