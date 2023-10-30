import { useCallback } from 'react';
import { SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { Provider } from 'react-redux';

import Routes from './src/routes'
import store from './src/store/store';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "FC-Subject-Rounded-Regular": require('./assets/fonts/FC-Subject-Rounded-Regular.ttf'),
    "FC-Subject-Rounded-Bold": require('./assets/fonts/FC-Subject-Rounded-Bold.ttf'),
  });


  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <Routes/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
