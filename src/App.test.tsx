import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Should show count button', () => {
  render(<App />);
  
  const createButton = screen.getByRole('button', { name: /count/i })

  expect(createButton).toBeInTheDocument()
  expect(createButton.textContent).toBe('Count')
  fireEvent.click(createButton)
});
