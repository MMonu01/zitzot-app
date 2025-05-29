/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {StatusBar, useColorScheme, View} from "react-native";
import {Provider} from "react-redux";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Colors} from "react-native/Libraries/NewAppScreen";

import {store} from "~/store";
import Navigation from "~/navigation";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
        <Provider store={store}>
          <View>
            <StatusBar
              barStyle={isDarkMode ? "light-content" : "dark-content"}
              backgroundColor={backgroundStyle.backgroundColor}
            />
          </View>
          <Navigation />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
