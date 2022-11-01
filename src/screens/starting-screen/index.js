import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../../common';

const Starter = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, height: undefined, width: undefined}}
        resizeMode="cover"
        source={require('../../utils/image/getStarted.png')}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('drawerRoot');
          }}
          style={{
            width: '90%',
            backgroundColor: colors.Yellow3,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,
          }}>
          <Text
            style={{
              textTransform: 'capitalize',
              fontSize: 15,
              color: colors.black,
              fontFamily: fontFamily.popinRegular,
            }}>
            {'Get Started'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Starter;
