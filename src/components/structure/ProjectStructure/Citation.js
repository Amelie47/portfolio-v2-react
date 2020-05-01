import React from 'react';
import '../../scss/ProjectStyles/citation.scss';

function Citation({ titre, para, w }) {
    return (
        <div className={`Citation Citation-${w}`}>
            <div className="titre">{titre}</div>
            <div className="paragraphe"><p>{para}</p></div>
        </div>
    );
}

export default Citation;