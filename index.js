import { Navigation } from "react-native-navigation";
import SplashScreen from 'react-native-splash-screen';

import {geolocationService} from './src/services/geolocation';
import {mainRoot} from './src/screens/layouts/mainRoot';

import {store} from './src/state/store';

/**** COMPONENTS ****/
import App from "./App";
import SideMenuLeft from './src/components/SideMenu/SideMenuLeft';
import SignIn from './src/components/SignIn/SignIn';
import DeadEnd from './src/components/DeadEnd';
import CreditCard from './src/components/CreditCard/CreditCard';
import Swiper from './src/components/Swiper/Swiper';
//import MainMap from './src/components/MainMap/MainMap';

Navigation.registerComponent(`App`, () => App);
Navigation.registerComponent(`SideMenuLeft`, () => SideMenuLeft);
Navigation.registerComponent(`SignIn`, () => SignIn);
Navigation.registerComponent(`DeadEnd`, () => DeadEnd);
Navigation.registerComponent(`CreditCard`, () => CreditCard);
Navigation.registerComponent(`Swiper`, () => Swiper);
//Navigation.registerComponent(`MainMap`, () => MainMap);


Navigation.events().registerAppLaunchedListener(  () => {

  console.log(mainRoot);
  //SplashScreen.hide();
  // Start tracking geolocation then launch main root
  geolocationService.watchLocation(  () => {
     Navigation.setRoot(mainRoot);
  });
});
