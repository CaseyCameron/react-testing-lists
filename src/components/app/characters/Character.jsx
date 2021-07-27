import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, affiliation, photoUrl }) => {
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{affiliation}</p>
    </figcaption>
  </figure>
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default Character;