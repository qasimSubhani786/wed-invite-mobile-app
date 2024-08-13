import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {allTexts, colors, fontFamily} from '../../common';
import Feather from 'react-native-vector-icons/Feather';

const Contacts = () => {
  const ContactList = ({onPress, name, relation}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderRadius: 10,
          width: '100%',
          padding: 10,
          backgroundColor: colors.lightMeron,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View>
          <Text
            style={{
              fontSize: 15,
              color: colors.Yellow3,
              textTransform: 'uppercase',
              fontFamily: fontFamily.popinBold,
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.white,
              fontFamily: fontFamily.popinMedium,
              textTransform: 'uppercase',
            }}>
            {relation}
          </Text>
        </View>
        <Feather name="phone-call" size={30} color={colors.green} />
      </TouchableOpacity>
    );
  };
  const placePhoneCall = phoneNumber => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, height: undefined, width: undefined}}
        resizeMode="cover"
        source={require('../../utils/image/bg-Barat.png')}>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            margin: 10,
            flex: 1,
          }}
          style={{flex: 1}}>
          {/* <ContactList
            name={allTexts.headings.contacts.father.name}
            relation={allTexts.headings.contacts.father.relation}
            onPress={() => {
              placePhoneCall(allTexts.headings.contacts.father.cell);
            }}
          /> */}
          <ContactList
            name={allTexts.headings.contacts.brother.name}
            relation={allTexts.headings.contacts.brother.relation}
            onPress={() => {
              placePhoneCall(allTexts.headings.contacts.brother.cell);
            }}
          />
          <ContactList
            name={allTexts.headings.contacts.brother2.name}
            relation={allTexts.headings.contacts.brother2.relation}
            onPress={() => {
              placePhoneCall(allTexts.headings.contacts.brother2.cell);
            }}
          />
          <View style={{position: 'absolute', bottom: 0}}>
            <Text
              style={{
                fontSize: 12,
                color: colors.white,
                fontFamily: fontFamily.popinMedium,
                textTransform: 'capitalize',
                textAlign: 'center',
              }}>
              {
                'it will be honor for us to have you present at our wedding ceremony. in case of any difficulty while visiting the location, just ring on those number above we are always up for you.'
              }
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Contacts;
