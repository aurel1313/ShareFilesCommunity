import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar/Navbar';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';
test('Navbar component', async () => {
  render(
    <SessionProvider session={null}> {/* Ajoutez un SessionProvider ici */}
      <ThemeProvider>
      <Navbar openModal={undefined} />
    </ThemeProvider>
    </SessionProvider>
  );
  
  expect(screen.getByText('Features')).toBeDefined();
});