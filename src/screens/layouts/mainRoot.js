
/*
export const mainStack = {
  bottomTabs: {
    children: [
      {
        stack: {
          id: 'tab1Stack',
          children: [
            {
              component: {
                name: 'navigation.playground.TextScreen',
                passProps: {
                  text: 'This is a side menu center screen tab 1'
                },
                // options: {
                //   bottomTab: {
                //     iconColor: 'red',
                //     textColor: 'red',
                //     selectedIconColor: 'purple',
                //     selectedTextColor: 'purple',
                //   }
                // }
              }
            }
          ],
          options: {
            bottomTab: {
              iconColor: 'red',
              textColor: 'red',
              selectedIconColor: 'purple',
              selectedTextColor: 'purple',
              text: 'Tab 1',
              icon: require('../images/one.png'),
              testID: testIDs.FIRST_TAB_BAR_BUTTON
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'navigation.playground.TextScreen',
                passProps: {
                  text: 'This is a side menu center screen tab 2'
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: 'Tab 2',
              icon: require('../images/two.png'),
              testID: testIDs.SECOND_TAB_BAR_BUTTON
            }
          }
        }
      },
      {
        stack: {
          children: [
            {
              component: {
                name: 'navigation.playground.TextScreen',
                passProps: {
                  text: 'This is a side menu center screen tab 3'
                }
              }
            }
          ],
          options: {
            bottomTab: {
              text: 'Tab 3',
              icon: require('../images/three.png'),
              testID: testIDs.SECOND_TAB_BAR_BUTTON
            }
          }
        }
      }
    ],
    options: {
      bottomTab: {
        textColor: '#AED581',
        iconColor: '#AED581',
        selectedTextColor: '#90CAF9',
        selectedIconColor: '#90CAF9',
        fontFamily: 'HelveticaNeue-Italic',
        fontSize: 13
      }
    }
  }
}
*/




export const mainRoot =  {root: {
  sideMenu: {
    left: {
      width: 300,
      component: {
        name: 'SideMenuLeft',

        passProps: {
          side: 'left'
        }
      }
    },

    center: {
      component: {

        name: 'SignIn',

      }
    } ,

    right: {
      component: {
        name: 'SideMenuLeft',
        passProps: {
          side: 'right'
        }
      }
    }
  }
}
};