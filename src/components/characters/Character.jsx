import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = ({ _id, name, affiliation, photoUrl }) => {
  return (
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{affiliation}</p>
        <p>{_id && <Link to={`/${_id}`}>Details</Link>}</p>
      </figcaption>
    </figure>
  )
};

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string,
  photoUrl: PropTypes.string.isRequired,
};

export default Character;