import React, { Component } from 'react';
import './CreatureItem.css';

export default class CreatureItem extends Component {
  render() {
    const creature = this.props.creatureProp;

    return (
      <div>
        <h1>{creature.title}</h1>
        <img src={creature.url} alt={creature.title} />
        <div>{creature.description}</div>
        <div>Number of Horns: {creature.horns}</div>
      </div>
    );
  }
}