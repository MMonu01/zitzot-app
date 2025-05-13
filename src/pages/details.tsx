import React from "react";
import {View, Text, Button} from "react-native";

import type {NativeStackScreenProps} from "@react-navigation/native-stack";

import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "~/types/navigation-types";

function DetailsScreen({
  route,
}: NativeStackScreenProps<RootStackParamList, "Details">): React.JSX.Element {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Details Screen</Text>
      <Button onPress={onPress} title="go to home page" />
    </View>
  );
}

export default DetailsScreen;
