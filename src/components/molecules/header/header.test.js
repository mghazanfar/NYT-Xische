import { render, screen } from '@testing-library/react';
import { Header } from '.';

test('renders app header', () => {
  render(<Header />);
  const header = screen.getByTestId("articles-page-header");
  expect(header).toBeInTheDocument();
});
