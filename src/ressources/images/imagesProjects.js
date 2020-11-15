import gabi from './projets/gabi_slide_2.png';
import gabititle from './projets/gabi_title.png';

import luma from './projets/luma_slide_2.png';
import lumatitle from './projets/luma_title.png';

import alix from './projets/alix_slide.png';
import alixtitle from './projets/alix_title.png';
import alix_picture1_reunions from './projets/Alix/screens/alix_screen_reunions.png';
import alix_picture2_decisions from './projets/Alix/screens/alix_screen_decisions.png';
import alix_picture3_decision_form from './projets/Alix/screens/alix_screen_decison_create_all_form.png';
import alix_picture4_aide from './projets/Alix/screens/alix_screen_aide.png';
import alix_picture5_users from './projets/Alix/screens/alix_screen_users.png';

import snated from './projets/snated_slide.png';
import snatedtitle from './projets/snated_title.png';
import snated_picture1_ip_evaluate from './projets/Snated/screens/snated_screen_ip_evaluate.png';
import snated_picture2_ip_show from './projets/Snated/screens/snated_screen_ip_show.png';
import snated_picture3_ips from './projets/Snated/screens/snated_screen_ips.png';
import snated_picture4_param from './projets/Snated/screens/snated_screen_param.png';
import snated_picture5_users from './projets/Snated/screens/snated_screen_users.png';
import snated_picture6_alerts from './projets/Snated/screens/snated_screen_alerts.png';

import indico from './projets/indico_slide.png';
import indicotitle from './projets/indico_title_v1.png';

const gabi_images = [
  { code: 'GA_1', src: gabi, name: 'gabi', description: 'gabi image slide' },
  {
    code: 'GA_2',
    src: gabititle,
    name: 'gabititle',
    description: 'gabititle image titre',
  },
];

const luma_images = [
  { code: 'LU_1', src: luma, name: 'luma', description: 'luma image slide' },
  {
    code: 'LU_2',
    src: lumatitle,
    name: 'lumatitle',
    description: 'lumatitle image slide',
  },
];

const alix_images = [
  { code: 'AL_1', src: alix, name: 'alix', description: 'alix image slide' },
  {
    code: 'AL_2',
    src: alixtitle,
    name: 'alixtitle',
    description: 'alixtitle image slide',
  },

  {
    code: 'AL_3',
    src: alix_picture1_reunions,
    name: 'alix_picture1_reunions',
    description: 'alix_picture1_reunions image screen',
  },
  {
    code: 'AL_4',
    src: alix_picture2_decisions,
    name: 'alix_picture2_decisions',
    description: 'alix_picture2_decisions image screen',
  },
  {
    code: 'AL_5',
    src: alix_picture3_decision_form,
    name: 'alix_picture3_decision_form',
    description: 'alix_picture3_decision_form image screen',
  },
  {
    code: 'AL_6',
    src: alix_picture4_aide,
    name: 'alix_picture4_aide',
    description: 'alix_picture4_aide image screen',
  },
  {
    code: 'AL_7',
    src: alix_picture5_users,
    name: 'alix_picture5_users',
    description: 'alix_picture5_users image screen',
  },
];

const snated_images = [
  {
    code: 'SN_1',
    src: snated,
    name: 'snated',
    description: 'snated image slide',
  },
  {
    code: 'SN_2',
    src: snatedtitle,
    name: 'snatedtitle',
    description: 'snatedtitle image slide',
  },
  {
    code: 'SN_3',
    src: snated_picture1_ip_evaluate,
    name: 'snated_picture1_ip_evaluate',
    description: 'snated_picture1_ip_evaluate image screen',
  },
  {
    code: 'SN_4',
    src: snated_picture2_ip_show,
    name: 'snated_picture2_ip_show',
    description: 'snated_picture2_ip_show image screen',
  },
  {
    code: 'SN_5',
    src: snated_picture3_ips,
    name: 'snated_picture3_ips',
    description: 'snated_picture3_ips image screen',
  },
  {
    code: 'SN_6',
    src: snated_picture4_param,
    name: 'snated_picture4_param',
    description: 'snated_picture4_param image screen',
  },
  {
    code: 'SN_7',
    src: snated_picture5_users,
    name: 'snated_picture5_users',
    description: 'snated_picture5_users image screen',
  },
  {
    code: 'SN_8',
    src: snated_picture6_alerts,
    name: 'snated_picture6_alerts',
    description: 'snated_picture6_alerts image screen',
  },
];

const indico_images = [
  {
    code: 'IN_1',
    src: indico,
    name: 'indico',
    description: 'indico image slide',
  },
  {
    code: 'IN_2',
    src: indicotitle,
    name: 'indicotitle',
    description: 'indicotitle image slide',
  },
];

const images = gabi_images.concat(
  luma_images,
  alix_images,
  snated_images,
  indico_images
);

export default images;
