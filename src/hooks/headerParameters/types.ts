export type headerParametersProps = {
  title?: string;
  showLogo?: boolean;
  showBackButton?: boolean;
  showConfigButton?: boolean;
  onBackPress?: () => void;
};

export type headerParametersContextType = {
  headerParameters: headerParametersProps;
  setHeaderParameters: React.Dispatch<React.SetStateAction<headerParametersProps>>;
  changeHeaderParameters: (newHeaderParameters: headerParametersProps) => void;
};

export type headerParametersProviderProps = {
  children: React.ReactNode;
};
