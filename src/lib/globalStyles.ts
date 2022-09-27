import { createGlobalStyle } from 'styled-components';
import { mediaBreakpointDown } from './styleHelpers';

const GlobalStyles = createGlobalStyle<{ isSidebarOpen?: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    -webkit-tap-highlight-color: transparent;
    outline: none !important;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.PAGE_BG.BASE};

    ${mediaBreakpointDown(980)} {
      overflow: ${({ isSidebarOpen }) => isSidebarOpen && 'hidden'}
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(224, 224, 224);
    border-radius: 4px;
  }

`;

export default GlobalStyles;
