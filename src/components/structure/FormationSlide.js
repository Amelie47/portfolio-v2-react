import React from 'react';
import Images from '../../ressources/images/images';

import '../scss/formations.scss';


function FormationSlide({ object, id }) {

  return (
    <div className="FormationSlide">
        <div className="component date">
          <p>{object[id].years}</p>
        </div>
        <div className="component">
          <p>{object[id].name}</p>
        </div>
        <div className="component spe">
          <p><span>Spécialisation : </span>{object[id].specialization}</p>
        </div>
        <div className="component place">
          <p>{object[id].organism}, {object[id].place} <span>({object[id].numberPlace})</span></p>
        </div>

        {object[id].options.length > 0 &&
          <div className="component options">
            <p><span>Options : </span>{object[id].options}</p>
          </div>
        }

        {object[id].complements.length > 0 &&
          <div className="component complements">
            {Object.keys(object[id].complements).map((v, i) => <div className="component"><p><span>{object[id].complements[i].name} : </span>{object[id].complements[i].content}</p></div>)}
          </div>
        }


    </div>
  );
}

export default FormationSlide;