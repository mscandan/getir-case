import { CardSizeType } from 'types';

export const getCardWidth = (size: CardSizeType) => {
  switch (size) {
    case 'sm':
      return '296px';
    case 'lg':
      return '608px';
    default:
      return '100%';
  }
};
