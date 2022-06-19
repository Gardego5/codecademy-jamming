import React from 'react';

import './Playlist.css';

import TrackList from '../TrackList/TrackList';

export default class Playlist extends React.Component {
  render() {
    return (
    <div classList="Playlist">
      <input value="New Playlist"/>
      <TrackList />
      <button classList="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
    );
  }
}
