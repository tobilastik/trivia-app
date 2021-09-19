import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootRoute from './app/navigation/root';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './app/store';

export default function App() {


  let [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <RootRoute />
        </Provider>
      </NavigationContainer>
    );
  }
}
