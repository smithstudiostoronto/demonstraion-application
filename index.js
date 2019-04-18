import { Navigation } from "react-native-navigation";
import {Platform} from 'react-native';

/**** COMPONENTS ****/
import App from "./App";


Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});

