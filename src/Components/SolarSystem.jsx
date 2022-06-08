import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div>
          {
            planets.map((el) => {el})
          }
        </div>
      </>
    )
  }
}

export default SolarSystem;