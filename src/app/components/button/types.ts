export type ButtonProps = {
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  size?: 'extra small' | 'small' | 'medium' | 'large' | 'thin';
  text?: string;
  disabled?: boolean;
};

export type buttonDefaultProps = {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'extra small' | 'small' | 'medium' | 'large' | 'thin';
};

export type handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed: boolean) => void;
export type buttonDefaultStylesProps = {
  heigh: string;
  color: string;
  fontFamily: string;
  textColor: string;
  fontSize: number;
  borderBackGround: string;
  borderColor?: string;
};
