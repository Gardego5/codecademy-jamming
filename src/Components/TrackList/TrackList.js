import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

export default class TrackList extends React.Component {
  render() {
    return (
    <div className="TrackList">
      { this.props.results && this.props.results.map(track => (
        <Track track={ track } />
      )) }
    </div>
    );
  }
}
