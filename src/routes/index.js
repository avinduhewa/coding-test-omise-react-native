import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppStack } from "./AppStack";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
       <RootStack.Screen
          name="App"
          component={AppStack}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
