import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, affiliation, allies, enemies, photoUrl }) => {
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>Name: {name}</p>
        <p>Affiliation: {affiliation}</p>
        <p>Allies: {allies}</p>
        <p>Enemies: {enemies}</p>
      </figcaption>
    </figure>
  )
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string,
  photoUrl: PropTypes.string.isRequired,
};

export default CharacterDetail;