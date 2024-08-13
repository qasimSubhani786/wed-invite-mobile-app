import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {allTexts, colors, fontFamily} from './src/common';
import Invitation from './src/screens/invitation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Contacts from './src/screens/contacts';
import SplashScreen from 'react-native-splash-screen';
import Walima from './src/screens/walima';
import {View, Text, SafeAreaView} from 'react-native';
import Starter from './src/screens/starting-screen';
import Barat from './src/screens/barat';

const App = () => {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createStackNavigator();
  const getInvitation = () => {
    return <Invitation />;
  };
  const getWalima = () => {
    return <Walima />;
  };
  const getContactScreen = () => {
    return <Contacts />;
  };
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  const TabNavigators = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: colors.lightYellow},
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: colors.primaryColor},
        }}
        swipeEnabled={true}>
        <Tab.Screen
          listeners={(navigation, route) => ({
            tabPress: e => {
              console.log(e);
            },
          })}
          options={{
            tabBarPressColor: colors.white,
            tabBarLabel: 'Barat',
            tabBarLabelStyle: {
              fontFamily: fontFamily.popinBold,
              textTransform: 'capitalize',
            },
            tabBarActiveTintColor: colors.lightYellow,
            tabBarInactiveTintColor: colors.white,
            tabBarBounces: true,
          }}
          name={'Barat'}
          component={getInvitation}
        />
        <Tab.Screen
          listeners={(navigation, route) => ({
            tabPress: e => {
              console.log(e);
            },
          })}
          options={{
            tabBarPressColor: colors.white,
            tabBarLabel: 'Walima',
            tabBarLabelStyle: {
              fontFamily: fontFamily.popinBold,
              textTransform: 'capitalize',
            },
            tabBarActiveTintColor: colors.lightYellow,
            tabBarInactiveTintColor: colors.white,
            tabBarBounces: true,
          }}
          name={'Walima'}
          component={getWalima}
        />
        <Tab.Screen
          listeners={(navigation, route) => ({
            tabPress: e => {
              console.log(e);
            },
          })}
          options={{
            tabBarPressColor: colors.white,
            tabBarLabel: allTexts.headings.contact,
            tabBarLabelStyle: {
              fontFamily: fontFamily.popinBold,
              textTransform: 'capitalize',
            },
            tabBarActiveTintColor: colors.lightYellow,
            tabBarInactiveTintColor: colors.white,
            tabBarBounces: true,
          }}
          name={'Invitation 2'}
          component={getContactScreen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/*   <Stack.Screen
            name={'starter'}
            component={Starter}
            options={{headerShown: false}}
  />*/}
          <Stack.Screen
            name={'drawerRoot'}
            component={TabNavigators}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
