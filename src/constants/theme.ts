import { DefaultTheme } from 'styled-components';

export const appTheme: DefaultTheme = {
  PAGE_BG: { BASE: '#E5E5E5' },
  COMPONENT_BG: { BASE: '#1EA4CE', HIGHLIGHT: '#F2F0FD', LOWLIGHT: '#147594' },
  TEXT_LIGHT: { BASE: '#A8A8A8', HIGHLIGHT: '#FFFFFF', LOWLIGHT: '#697488' },
  TEXT_DARK: { BASE: '#525252', HIGHLIGHT: '#E0E0E0', LOWLIGHT: '#191919' },
  BORDER: { BASE: '#DFDEE2', LOWLIGHT: '#F4F4F4' },
} as const;
