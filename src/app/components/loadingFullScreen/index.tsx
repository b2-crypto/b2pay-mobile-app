import { useContext } from 'react';
import { Image, View } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';

const LoadingFullScreen: React.FC = () => {
  const { isDarkMode } = useContext(themeContext);
  return (
    <View>
      <Image
        source={
          isDarkMode
            ? require('../../../../assets/images/loadingdark.gif')
            : require('../../../../assets/images/loadinglight.gif')
        }
        style={{ width: 140, height: 78 }}
        width={200}
        height={200}
      />
    </View>
  );
};

export default LoadingFullScreen;
