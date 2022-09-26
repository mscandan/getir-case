import { MediaBreakpointType } from 'types';

export const MEDIA_BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1200px',
};

export const mediaBreakpointDown = (breakpoint: MediaBreakpointType | number) => {
  if (breakpoint === 'mobile') {
    return `@media (max-width: ${MEDIA_BREAKPOINTS.mobile})`;
  }
  if (breakpoint === 'tablet') {
    return `@media (max-width: ${MEDIA_BREAKPOINTS.tablet})`;
  }
  if (breakpoint === 'desktop') {
    return `@media (max-width: ${MEDIA_BREAKPOINTS.desktop})`;
  }
  return `@media (max-width: ${breakpoint}px)`;
};

export const mediaBreakpointUp = (breakpoint: MediaBreakpointType | number) => {
  if (breakpoint === 'mobile') {
    return `@media (min-width: ${MEDIA_BREAKPOINTS.mobile})`;
  }
  if (breakpoint === 'tablet') {
    return `@media (min-width: ${MEDIA_BREAKPOINTS.tablet})`;
  }
  if (breakpoint === 'desktop') {
    return `@media (min-width: ${MEDIA_BREAKPOINTS.desktop})`;
  }
  return `@media (min-width: ${breakpoint}px)`;
};

export const hideOnMobileDown = `
    ${mediaBreakpointDown('mobile')}{
        display: none !important;
    }
`;

export const hideOnTabletDown = `
    ${mediaBreakpointDown('tablet')}{
        display: none !important;
    }
`;

export const hideOnDesktopDown = `
    ${mediaBreakpointDown('desktop')}{
        display: none !important;
    }
`;

export const hideOnMobileUp = `
    ${mediaBreakpointUp('mobile')}{
        display: none !important;
    }
`;

export const hideOnTabletUp = `
    ${mediaBreakpointUp('tablet')}{
        display: none !important;
    }
`;

export const hideOnDesktopUp = `
    ${mediaBreakpointUp('desktop')}{
        display: none !important;
    }
`;
