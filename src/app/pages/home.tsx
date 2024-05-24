import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';

export const pageName = 'Home';
import { Button } from '../components/button';
import { themeContext } from '../../hooks/themeContext';
import { parametrizationContext } from '../../hooks/parametrizationContext';

function Home(): React.JSX.Element {
  const { theme } = useContext(themeContext);
  const { t } = useContext(parametrizationContext);

  return (
    <SafeAreaView style={{ padding: 20, backgroundColor: theme.secondary.neutral[100] }}>
      <Button type={'primary'} size="large" text={t?.pages.buttons.clickMe} />
      <Button type={'primary'} size="thin" text={t?.pages.buttons.clickMe} />
      <Button type={'primary'} size="small" text={t?.pages.buttons.clickMe} />
      <Button type={'primary'} size="extra small" text={t?.pages.buttons.clickMe} />

      <Button type={'secondary'} size="large" text={t?.pages.buttons.clickMe} />
      <Button type={'secondary'} size="thin" text={t?.pages.buttons.clickMe} />
      <Button type={'secondary'} size="small" text={t?.pages.buttons.clickMe} />
      <Button type={'secondary'} size="extra small" text={t?.pages.buttons.clickMe} />

      <Button type={'tertiary'} size="large" text={t?.pages.buttons.clickMe} />
      <Button type={'tertiary'} size="thin" text={t?.pages.buttons.clickMe} />
      <Button type={'tertiary'} size="small" text={t?.pages.buttons.clickMe} />
      <Button type={'tertiary'} size="extra small" text={t?.pages.buttons.clickMe} />
    </SafeAreaView>
  );
}

export default Home;
