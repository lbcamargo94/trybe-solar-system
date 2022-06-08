import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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

      <div className="missions-container">
        <Card style={{ width: '25rem' }} className="missions-card">
          <Card.Body>
            <Card.Title>
              {`Nome da Missão: ${name}`}
            </Card.Title>
            <Card.Text>
              {`Ano da Missão: ${year}`}
            </Card.Text>
            <Card.Text>
              {`Responssáveis pela Missão: ${country}`}
            </Card.Text>
            <Card.Text>
              {`Destino da Missão: ${destination}`}
            </Card.Text>
          </Card.Body>
        </Card>
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