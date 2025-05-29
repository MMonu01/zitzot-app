import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {useAppDispatch} from "~/hooks/useAppDispatch";
import {useAppSelector} from "~/hooks/useAppSelector";

import {incrementCounter, decrementCounter} from "~/logic/slices/counter-slice";

function HomeScreen(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const counter_value = useAppSelector(state => state.counter_slice.value);

  const onPress = () => {
    navigation.navigate("Details");
  };

  const increment = () => {
    dispatch(incrementCounter());
    // Alert.alert("counter incremented by 1");
  };

  const decrement = () => {
    dispatch(decrementCounter());
    // Alert.alert("counter decremented by 1");
  };

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>Home Screen</Text>
      <View
        style={{
          marginTop: 100,
          marginBottom: 100,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}>
        <Text>Counter Value: {counter_value}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
          }}>
          <Button onPress={decrement} title="Decrement" />
          <Button onPress={increment} title="Increment" />
        </View>
      </View>
      <Button onPress={onPress} title="go to details page" />
    </View>
  );
}

export default HomeScreen;
