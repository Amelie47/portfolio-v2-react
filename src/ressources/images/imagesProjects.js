import gabi from './projets/gabi_slide_2.png';
import gabititle from './projets/gabi_title.png';

import luma from './projets/luma_slide_2.png';
import lumatitle from './projets/luma_title.png';

import alix from './projets/alix_slide.png';
import alixtitle from './projets/alix_title.png';
import alixpicture1 from './projets/alix-picture_1.png';
import alixpicture2 from './projets/alix-picture_2.png';

import snated from './projets/snated_slide.png';
import snatedtitle from './projets/snated_title.png';

const gabi_images = [
    { code: "GA_1", src: gabi, name: 'gabi', description: 'gabi image slide' },
    { code: "GA_2", src: gabititle, name: 'gabititle', description: 'gabititle image titre' }
]

const luma_images = [
    { code: "LU_1", src: luma, name: 'luma', description: 'luma image slide' },
    { code: "LU_2", src: lumatitle, name: 'lumatitle', description: 'lumatitle image slide' }
]

const alix_images = [
    { code: "AL_1", src: alix, name: 'alix', description: 'alix image slide' },
    { code: "AL_2", src: alixtitle, name: 'alixtitle', description: 'alixtitle image slide' },
    { code: "AL_3", src: alixpicture1, name: 'alixpicture1', description: 'alixpicture1 image' },
    { code: "AL_4", src: alixpicture2, name: 'alixpicture2', description: 'alixpicture2 image' }
]

const snated_images = [
    { code: "SN_1", src: snated, name: 'snated', description: 'snated image slide' },
    { code: "SN_2", src: snatedtitle, name: 'snatedtitle', description: 'snatedtitle image slide' }
]
  
const images = gabi_images.concat(luma_images, alix_images, snated_images);

export default images;