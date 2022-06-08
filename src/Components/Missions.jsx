
import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        {/* Titulo do Conteúdo */}
        <Title headline="Missões" />
        {/* Conteúdo das Missões */}
        <div className="missions-container">
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