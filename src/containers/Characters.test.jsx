import React from 'react';
import { render, screen } from '@testing-library/react';
import Characters from './Characters';

describe('Avatar Characters Container', () => {
  it('displays a list of Avatar characters', async () => {
    render(<Characters />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  })
});