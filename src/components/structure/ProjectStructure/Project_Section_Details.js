import React from 'react';
import '../../scss/ProjectStyles/section_details.scss';
import Citation from './Citation';

function SectionDetails({details}) {
    return (
        <div className="SectionDetails">
            <div className="citations">
            {Object.keys(details).map((v, i) => 
            <Citation titre={details[i].titre} para={details[i].detail} w="40"></Citation>
            )}
            </div>
        </div>
    );
}

export default SectionDetails;