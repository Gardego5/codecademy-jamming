import React from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

import Spotify from '../../util/Spotify';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      playlistName: 'Medley',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.id);

    console.log(trackURIs);
  }

  async search(term) {
    this.setState({results: await Spotify.search(term)});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div>
          <SearchBar
            onSearch={ this.search } />
          <div className="App-playlist">
            <SearchResults
              results={ this.state.results }
              onAdd={ this.addTrack } />
            <Playlist
              name={ this.state.playlistName }
              tracks={ this.state.playlistTracks }
              onRemove={ this.removeTrack }
              onNameChange={ this.updatePlaylistName }
              onSave={ this.savePlaylist } />
          </div>
        </div>
      </div>
    );
  }
}
