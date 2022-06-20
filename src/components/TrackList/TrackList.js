import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

export default class TrackList extends React.Component {
  render() {
    return (
    <div className="TrackList">
      { this.props.tracks && this.props.tracks.map(track => (
        <Track
          track={ track }
          isRemoval={ this.props.isRemoval }
          onAdd={ this.props.onAdd }
          onRemove={ this.props.onRemove } />
      )) }
    </div>
    );
  }
}
