import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div>
        <p>
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${ planetName }` } />
      </div>
    )
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;