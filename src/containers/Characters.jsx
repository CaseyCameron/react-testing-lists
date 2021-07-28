import React, { Component } from 'react';
import Characters from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/CharacterFetch';

export default class ListAvatarCharacters extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { characters, loading } = this.state;
    if (loading) return <h1> Loading...</h1>;

    return <Characters characters={characters} />
  }
}
