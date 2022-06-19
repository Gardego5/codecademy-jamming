import React from 'react';

import './Track.css';

export default class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    const track = this.props.track;
    let button;

    if (this.props.isRemoval) {
      button = <button className="Track-action" onClick={ this.removeTrack } >-</button>; 
    } else {
      button = <button className="Track-action" onClick={ this.addTrack }>+</button>;
    }

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{ track.name }</h3>
          <p>{ track.artist } | { track.album }</p>
        </div>
        { button }
      </div>
    );
  }
}
