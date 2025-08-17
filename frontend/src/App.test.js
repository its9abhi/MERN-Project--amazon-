import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './Store';
import { HelmetProvider } from 'react-helmet-async';

test('renders navbar brand', () => {
  render(
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  );
  const brandElement = screen.getByText(/amazona/i);
  expect(brandElement).toBeInTheDocument();
});
