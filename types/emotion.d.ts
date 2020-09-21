import '@emotion/react';

import { MaterialColor } from 'types/theme';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      foreground: MaterialColor,
      background: MaterialColor,
    },
  }
}
