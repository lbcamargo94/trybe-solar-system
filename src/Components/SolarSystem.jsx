import React, { Component } from 'react';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
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