export enum IconTypesEnum {
  coins = "coins",
  chart = "chart",
  favourite = "favourite",
  userProfile = "userProfile",
  contact = "contact",
}
export interface IContainerBox {
  title?: React.ReactNode;
  icon?: IconTypesEnum;
  children: React.ReactNode;
  style?: string;
  className?: string;
  shadow?: boolean;
  windowsButton?: boolean;
  loading?: boolean;
}
