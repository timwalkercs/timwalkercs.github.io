import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name, every project, and a resume link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /timothy walker/i })).toBeInTheDocument();
  ['Pylon', 'MxMatrix', '3D Print Failure Detection'].forEach((title) => {
    expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument();
  });
  expect(screen.getAllByText(/resume/i).length).toBeGreaterThan(0);
});
