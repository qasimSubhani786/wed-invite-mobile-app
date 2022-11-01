import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '../../common/theme';
import Invitation from '../invitation';
import Contacts from '../contacts';

const Barat = () => {
  const Tab = createMaterialTopTabNavigator();
  const getInvitation = () => {
    return <Invitation />;
  };
  const getContactScreen = () => {
    return <Contacts />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          // initialRouteName={getInitialRouteName()}
          swipeEnabled={true}>
          <Tab.Screen
            listeners={(navigation, route) => ({
              tabPress: e => {
                console.log(e);
              },
            })}
            options={{
              tabBarPressColor: '#FFF',
              tabBarLabel: 'filterCar.make',
              tabBarLabelStyle: {
                //   fontFamily: fontFamily.popinRegular,
                textTransform: 'capitalize',
              },
              tabBarActiveTintColor: colors.primaryColor,
              tabBarInactiveTintColor: colors.red2,
              tabBarBounces: true,
            }}
            name={'Invitation'}
            component={getInvitation}
          />
          <Tab.Screen
            listeners={(navigation, route) => ({
              tabPress: e => {
                console.log(e);
              },
            })}
            options={{
              tabBarPressColor: '#FFF',
              tabBarLabel: 'filterCar.make',
              tabBarLabelStyle: {
                //   fontFamily: fontFamily.popinRegular,
                textTransform: 'capitalize',
              },
              tabBarActiveTintColor: colors.primaryColor,
              tabBarInactiveTintColor: colors.red2,
              tabBarBounces: true,
            }}
            name={'Invitation 2'}
            component={getContactScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Barat;
