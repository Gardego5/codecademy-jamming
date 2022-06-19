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
      ],
      playlistName: 'Medley',
      playlistTracks: [
        {
          name: 'Here I Go Again',
          artist: 'Whitesnake',
          album: 'Saints & Sinners'
        },
        {
          name: 'Für Elise',
          artist: 'Richard Clayderman',
          album: 'Träumereien: Die Schönsten Klavier-Melodien Mit Richard Clayderman'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.filter( extantTrack => extantTrack.id === track.id )) {
      let playlistTracks = this.state.playlistTracks;
      playlistTracks.push(track);
      this.setState({playlistTracks: playlistTracks});
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults results={ this.state.results } onAdd={ this.addTrack } />
            <Playlist name={ this.state.playlistName } tracks={ this.state.playlistTracks } />
          </div>
        </div>
      </div>
    );
  }
}
