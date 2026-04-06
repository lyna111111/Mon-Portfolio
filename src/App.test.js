import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero name', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Lina MADANI/i)[0];
  expect(linkElement).toBeInTheDocument();
});
