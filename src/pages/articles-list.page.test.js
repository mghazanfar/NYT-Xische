import { render, screen } from '@testing-library/react';
import App from '../App';

test('Render Articles Page', () => {
  render(<App />);
  const articlesPage = screen.getByTestId("articles-page");
  expect(articlesPage).toBeInTheDocument();
});
