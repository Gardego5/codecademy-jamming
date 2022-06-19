import React from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [
        {
          name: 'Imagine',
          artist: 'John Lennon',
          album: 'Imagine'
        },
        {
          name: 'Stariway To Heaven',
          artist: 'Rodrigo y Gabriela',
          album: 'Rodrigo y Gabriela'
        },
        {
          name: 'Tamacun',
          artist: 'Rodrigo y Gabriela',
          album: 'Rodrigo y Gabriela'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults results={ this.state.results } />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}
