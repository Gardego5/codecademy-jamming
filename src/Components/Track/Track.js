import React from 'react';

import './Track.css';

export default class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  render() {
    const track = this.props.track
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{ track.name }</h3>
          <p>{ track.artist } | { track.album }</p>
        </div>
        <button className="Track-action">{/* + or - will go here */}</button>
      </div>
    );
  }
}