import 'styled-components';

interface Tones {
  readonly BASE: string;
  readonly LOWLIGHT?: string;
  readonly HIGHLIGHT?: string;
}

export enum ColorEnums {
  PAGE_BG = 'PAGE_BG',
  PAGE_TITLE = 'PAGE_TITLE',
  COMPONENT_BG = 'COMPONENT_BG',
  TEXT_LIGHT = 'TEXT_LIGHT',
  TEXT_DARK = 'TEXT_DARK',
  BORDER = 'BORDER',
}

type ThemeType = { readonly [T in ColorEnums]: Tones };

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
