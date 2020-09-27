import { Theme } from '@emotion/react';

import Carnation from 'themes/dracula/colors/Carnation';
import Charade from 'themes/dracula/colors/Charade';
import Lavender from 'themes/dracula/colors/Lavender';
import PersianPink from 'themes/dracula/colors/PersianPink';
import SpringWood from 'themes/dracula/colors/SpringWood';

const DraculaTheme: Theme = {
  color: {
    foreground: SpringWood,
    background: Charade,
    primary1: PersianPink,
    primary2: Lavender,
    primary3: Carnation,
  },
};

export default DraculaTheme;
