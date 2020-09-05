import React from 'react';
import '../scss/formations.scss';

import Images from '../../ressources/images/imagesFormations';

function FormationSlide({ object, id }) {

  const logo = Images.find(x => x.code === object[id].logo_id);

  return (
    <div className="FormationSlide">

      <div className="components">

        <div className="component date">
          <p>{object[id].years}</p>
        </div>
        <div className="component name">
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
            {Object.keys(object[id].complements).map((v, i) => <div className="component" key={i}><p><span>{object[id].complements[i].name} : </span>{object[id].complements[i].content}</p></div>)}
          </div>
        }

        <div className="component image">
          <img src={logo.src} alt={logo.description}/>
        </div>


      </div>

    </div>
  );
}

export default FormationSlide;