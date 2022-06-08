import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    // Props:
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      // Conteúdo MissionCard
      <div data-testid="mission-card">
        <p data-testid="mission-name">{`Nome da Missão: ${name}`}</p>
        <p data-testid="mission-year">{`Ano da Missão: ${year}`}</p>
        <p data-testid="mission-country">{`Responssáveis pela Missão: ${country}`}</p>
        <p data-testid="mission-destination">{`Destino da Missão: ${destination}`}</p>
      </div>
    );
  }
}

// Validando props
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;