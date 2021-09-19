import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { root } from './routes';

type RootStackParam = {
  name: any;
  component: any;
};
const Stack = createNativeStackNavigator();

const renderScreen: React.FC<RootStackParam> = ({ name, component }, index) => {
  return (
    <Stack.Screen
      name={name}
      key={index}
      component={component}
      options={{ headerShown: false, gestureEnabled: false }}
    />
  );
};

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {root.map((item, index) => {
        return renderScreen(item, index);
      })}
    </Stack.Navigator>
  );
};

export default Screens;
