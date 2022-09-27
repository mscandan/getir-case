import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { mediaBreakpointDown } from '../../lib/styleHelpers';
import { Icon } from '../Icon';

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};

  svg {
    fill: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.COMPONENT_BG.BASE};

    svg {
      fill: ${({ theme }) => theme.COMPONENT_BG.BASE};
    }
  }
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  .previous {
    position: absolute;
    left: 36px;

    ${mediaBreakpointDown('mobile')} {
      left: 0;
    }
  }

  .next {
    position: absolute;
    right: 36px;

    ${mediaBreakpointDown('mobile')} {
      right: 0;
    }
  }

  .rp-page {
    list-style-type: none;
    transition: background 0.2s;
    border-radius: 2px;
    color: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};

    &:hover {
      cursor: pointer;
    }

    ${mediaBreakpointDown(500)} {
      display: none;
    }
  }

  .rp-link {
    width: 32px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;

    &:hover {
      color: ${({ theme }) => theme.COMPONENT_BG.BASE};
    }
  }

  .rp-break {
    width: 32px;
    height: 40px;
    cursor: pointer;

    &:hover svg {
      fill: ${({ theme }) => theme.COMPONENT_BG.BASE};
    }

    ${mediaBreakpointDown(500)} {
      display: none;
    }
  }

  .rp-break-link {
    line-height: 2.08px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};
  }

  .selected {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COMPONENT_BG.BASE};
    color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};

    ${mediaBreakpointDown(500)} {
      display: none;
    }

    .rp-link:hover {
      color: ${({ theme }) => theme.TEXT_LIGHT.HIGHLIGHT};
    }
  }

  .disabled {
    ${StyledLabel} {
      &:hover {
        cursor: not-allowed;
        color: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};

        svg {
          color: ${({ theme }) => theme.TEXT_LIGHT.LOWLIGHT};
        }
      }
    }
  }
`;

export const StyledLabelText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin: 0 7px;
`;

export const StyledThreeDotsIcon = styled(Icon)`
  fill: ${({ theme }) => theme.TEXT_LIGHT.BASE};
  cursor: pointer;
  height: 3px;
  width: 10px;

  &:hover {
    fill: ${({ theme }) => theme.COMPONENT_BG.BASE};
  }
`;
