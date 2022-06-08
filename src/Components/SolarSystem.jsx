import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div className="planet-carousel">
          <Carousel
            autoFocus="true"
            autoPlay="true"
            infiniteLoop="true"
            interval={3000}
          >
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
          </Carousel>
        </div>
      </>
    )
  }
}

export default SolarSystem;