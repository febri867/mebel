import React from 'react';
import { render } from '@testing-library/react';
import App from './page/index';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
