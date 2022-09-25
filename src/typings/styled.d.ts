import 'styled-components';

interface Tones {
  readonly BASE: string;
  readonly LOWLIGHT?: string;
  readonly HIGHLIGHT?: string;
}

export enum ColorEnums {
  PAGE_BG = 'PAGE_BG',
  COMPONENT_BG = 'COMPONENT_BG',
  TEXT_LIGHT = 'TEXT_LIGHT',
  TEXT_DARK = 'TEXT_DARK',
}

type ThemeType = { readonly [T in ColorEnums]: Tones };

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
