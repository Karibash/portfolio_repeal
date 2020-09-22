import { Theme } from '@emotion/react';

import Charade from "themes/dracula/colors/Charade";
import SpringWood from "themes/dracula/colors/SpringWood";
import PersianPink from "./colors/PersianPink";
import Lavender from "./colors/Lavender";

const DraculaTheme: Theme = {
  color: {
    foreground: SpringWood,
    background: Charade,
    primary1: PersianPink,
    primary2: Lavender,
  },
};

export default DraculaTheme;
