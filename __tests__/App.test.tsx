import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders auth screens by default', async () => {
    render(<App />);
    expect(await screen.findByText(/Welcome back/i)).toBeTruthy();
  });
});
