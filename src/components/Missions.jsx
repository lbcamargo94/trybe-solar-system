
import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        {/* Titulo do Conteúdo */}
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        {/* Conteúdo das Missões */}
        <div>
          { missions.map((element) => (
              <MissionCard
                key={ element.name }
                name={ element.name }
                year={ element.year }
                country={ element.country }
                destination={ element.destination }
              />
            ))
          }
        </div>
      </>
    );
  }
}

export default Missions;