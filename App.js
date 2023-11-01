const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Image7 from "./components/Image7";
import Image6 from "./components/Image6";
import Loading from "./screens/Loading";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Menu from "./screens/Menu";
import Button1 from "./screens/Button1";
import Button2 from "./screens/Button2";
import Button3 from "./screens/Button3";
import Button4 from "./screens/Button4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Loading"
              component={Loading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Button1"
              component={Button1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Button2"
              component={Button2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Button3"
              component={Button3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Button4"
              component={Button4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
