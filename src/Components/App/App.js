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
          album: 'Imagine',
          id: '000',
        },
        {
          name: 'Stariway To Heaven',
          artist: 'Rodrigo y Gabriela',
          album: 'Rodrigo y Gabriela',
          id: '001',
        },
        {
          name: 'Tamacun',
          artist: 'Rodrigo y Gabriela',
          album: 'Rodrigo y Gabriela',
          id: '002',
        }
      ],
      playlistName: 'Medley',
      playlistTracks: [
        {
          name: 'Here I Go Again',
          artist: 'Whitesnake',
          album: 'Saints & Sinners',
          id: '003',
        },
        {
          name: 'Für Elise',
          artist: 'Richard Clayderman',
          album: 'Träumereien: Die Schönsten Klavier-Melodien Mit Richard Clayderman',
          id: '004',
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.indexOf(track) === -1) {
      let playlistTracks = this.state.playlistTracks;
      playlistTracks.push(track);
      this.setState({playlistTracks: playlistTracks});
    }
  }

  removeTrack(track) {
    let playlistLessTheTrack = this.state.playlistTracks.filter(
      // Include everything not equal to the one to remove.
      extantTrack => extantTrack.id !== track.id
    );

    this.setState({playlistTracks: playlistLessTheTrack});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults results={ this.state.results } onAdd={ this.addTrack } />
            <Playlist name={ this.state.playlistName } tracks={ this.state.playlistTracks } onRemove={ this.removeTrack } />
          </div>
        </div>
      </div>
    );
  }
}
