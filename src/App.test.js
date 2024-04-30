import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dice for snakes and ladders', () => {
  render(<App />);
  const diceElement = screen.getByText(/Roll Dice/i);
  expect(diceElement).toBeInTheDocument();
});
