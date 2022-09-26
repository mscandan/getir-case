import React from 'react';
import * as Icons from '../../assets/icons';

type IconNameType =
  | 'logo'
  | 'arrowLeft'
  | 'arrowRight'
  | 'basket'
  | 'close'
  | 'loading'
  | 'menu'
  | 'minus'
  | 'plus'
  | 'threeDots'
  | 'vector';

interface IconProps {
  name: IconNameType;
  onClick?: (e: React.MouseEvent) => void;
  size?: number;
  className?: string;
  color?: string;
  stroke?: string;
}

const iconList: { [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } = {
  logo: Icons.Logo,
  arrowLeft: Icons.ArrowLeft,
  arrowRight: Icons.ArrowRight,
  basket: Icons.Basket,
  close: Icons.Close,
  loading: Icons.Loading,
  menu: Icons.Menu,
  minus: Icons.Minus,
  plus: Icons.Plus,
  threeDots: Icons.ThreeDots,
  vector: Icons.Vector,
};

export const Icon: React.FC<IconProps> = React.memo(
  ({ size = 20, name, className, color, stroke, onClick, ...rest }) => {
    const SvgIcon = iconList[name];

    if (!SvgIcon) {
      return null;
    }

    return (
      <SvgIcon
        className={className}
        width={size}
        height={size}
        color={color}
        stroke={stroke}
        onClick={onClick}
        {...rest}
      />
    );
  },
);
