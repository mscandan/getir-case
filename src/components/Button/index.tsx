import React from 'react';
import { Button, ButtonProps } from './Button';

export const SolidButton: React.FC<ButtonProps> = props => {
  return <Button buttonType="solid" {...props} />;
};

export const FlatButton: React.FC<ButtonProps> = props => {
  return <Button buttonType="flat" {...props} />;
};

export const OutlineButton: React.FC<ButtonProps> = props => {
  return <Button buttonType="outline" {...props} />;
};
