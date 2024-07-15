import { render, screen } from '@testing-library/react';
import { PageTitle } from '.';

test('Render Page Title Component', () => {
  render(<PageTitle title={"Test Title"}/>);
  const pageTitle = screen.getByTestId("page-title");
  expect(pageTitle).toBeInTheDocument();
});


test('Render Correct Page Title', () => {
  const title = "Test Title"
  render(<PageTitle title={title}/>);
  const pageTitle = screen.getByText(title);
  expect(pageTitle).toBeInTheDocument();
});
