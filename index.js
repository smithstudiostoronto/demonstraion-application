import { Navigation } from "react-native-navigation";
import SplashScreen from 'react-native-splash-screen';

import {geolocationService} from './src/services/geolocation';
import {mainRoot} from './src/screens/layouts/mainRoot';

/**** COMPONENTS ****/
import App from "./App";
import SideMenuLeft from './src/components/SideMenu/SideMenuLeft';


Navigation.registerComponent(`App`, () => App);
Navigation.registerComponent(`SideMenuLeft`, () => SideMenuLeft);


Navigation.events().registerAppLaunchedListener( () => {

  // Start tracking geolocation then launch main root
  geolocationService.watchLocation(() => {
    Navigation.setRoot(mainRoot);
    SplashScreen.hide();
  });
});

