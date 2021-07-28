import React, { Component } from 'react';
import Characters from '../components/characters/CharacterList';
import { fetchCharacterById } from '../services/CharacterFetch';
import { useParams } from 'react-router-dom';

export default class ListAvatarCharacters extends Component {
  state = {
    loading: true,
    character: null,
  };



  async componentDidMount() {
    // let { _id } = this.props.match.params._id;
    console.log('_id', this.props.match.params._id);
    const character = await fetchCharacterById(this.props.match.params._id);
    console.log('character', character);
    this.setState({ character, loading: false });
  }

  render() {
    const { character, loading } = this.state;
    if (loading) return <h1> Loading...</h1>;

    return <Characters />
  }
}
