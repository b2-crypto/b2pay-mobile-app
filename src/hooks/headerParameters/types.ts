export type headerParametersProps = {
  title?: string;
  showBackButton?: boolean;
  showConfigButton?: boolean;
  onBackPress?: () => void;
};

export type headerParametersContextType = {
  headerParameters: headerParametersProps;
  setHeaderParameters: React.Dispatch<React.SetStateAction<headerParametersProps>>;
};

export type headerParametersProviderProps = {
  children: React.ReactNode;
};
