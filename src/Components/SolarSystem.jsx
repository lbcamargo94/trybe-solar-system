import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div>
          {
            planets.map((el) => (
              <PlanetCard 
                key={ el.name }
                planetName={ el.name }
                planetImage={ el.image }
              />
              )
            )
          }
        </div>
      </>
    )
  }
}

export default SolarSystem;