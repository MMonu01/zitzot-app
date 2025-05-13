import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <Button onPress={onPress} title="go to details page" />
    </View>
  );
}

export default HomeScreen;
