import React from 'react';
import '../../scss/ProjectStyles/section_screens.scss';
import Pattern1 from './SectionScreensPatterns/Pattern1';
import Pattern2 from './SectionScreensPatterns/Pattern2';

function SectionScreens({ imageCode, projectScreenSection }) {
  return (
    <div className='SectionScreens'>
      <Pattern></Pattern>
    </div>
  );

  function Pattern() {
    switch (projectScreenSection.pattern) {
      case 1:
        return (
          <Pattern1
            imageCode={imageCode}
            projectScreenSectionImages={projectScreenSection.images}
          ></Pattern1>
        );
        break;
      case 2:
        return (
          <Pattern2
            imageCode={imageCode}
            projectScreenSectionImages={projectScreenSection.images}
          ></Pattern2>
        );
        break;
      default:
        return <div>No images.</div>;
        break;
    }
  }
}

export default SectionScreens;
