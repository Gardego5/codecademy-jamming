import React from 'react';

import './Playlist.css';

import TrackList from '../TrackList/TrackList';

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
    <div className="Playlist">
      <input
        value={ this.props.name }
        onChange={ this.handleNameChange } />

      <TrackList
        tracks={ this.props.tracks }
        isRemoval={ true }
        onRemove={ this.props.onRemove } />

      <button
        className="Playlist-save"
        onClick={ this.props.onSave }
      >
        SAVE TO SPOTIFY
      </button>
    </div>
    );
  }
}
