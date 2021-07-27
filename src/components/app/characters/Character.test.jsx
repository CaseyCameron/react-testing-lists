import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders a Character', () => {
    const { asFragment } = render(
      <Character
        name="46th Earth King"
        photoUrl="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441"
        affiliation=" Earth Kingdom Earth Kingdom Royal Family"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});