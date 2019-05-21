#import "AppDelegate.h"


#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>
#import <GoogleMaps/GoogleMaps.h>
#import "RNSplashScreen.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [GMSServices provideAPIKey:@"AIzaSyAk0hgH-DB7H2zLD8ibxaZQ-LAUbf7uIK0"]; // add this line using the api key obtained from Google Console

  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
  //AIzaSyDVl6xUw3da_7doyCYGCwL84ulBBUpmZuk
  
  [RNSplashScreen show];
  return YES;
}

@end
