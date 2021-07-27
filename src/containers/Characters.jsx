import React, { Component } from 'react';
import Character from '../components/characters/Character';
import { fetchCharacters } from '../services/CharacterFetch';

export default class AvatarCharacters extends Component {
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

    return <Character characters={characters} />
  }
}
