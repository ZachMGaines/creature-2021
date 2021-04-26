import React, { Component } from 'react';
import CreatureItem from './CreatureItem.js';
import './CreatureList.css';


export default class CreatureList extends Component {
  render() {
    const creatures = this.props.creatures;

    return (
      <ul className="CreatureList">
        {creatures.map(creature => (
          <CreatureItem key={creature.title} creatureProp={creature} />
        ))}
      </ul>
    );
  }
}