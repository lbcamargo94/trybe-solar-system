import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="planet-card-container">
        <Card style={{ width: '25rem' }} className="card planet-card" >
          <Card.Img
            alt={ `Planeta ${ planetName }` }
            className="planet-card-image"
            src={ planetImage }
            variant="top"
          />
          <Card.Body className="planet-card-body">
            <Card.Title className="planet-card-title">
              { planetName }
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;