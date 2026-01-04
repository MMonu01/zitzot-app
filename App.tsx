/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import {Provider} from "react-redux";
import {StatusBar, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {store} from "~/store";
import Navigation from "~/navigation";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
        <Provider store={store}>
          <View>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
          </View>
          <Navigation />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
