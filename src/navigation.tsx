import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import type {RootStackParamList} from "./types/navigation-types";

import HomeScreen from "~/pages/home";
import DetailsScreen from "~/pages/details";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{product_id: ""}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
