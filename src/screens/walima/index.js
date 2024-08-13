import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import {allTexts, colors, fontFamily} from '../../common';
import PushNotification from 'react-native-push-notification';

const Walima = () => {
  const createChannelForNotifications = () => {
    PushNotification.createChannel(
      {
        channelId: '123', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  const ScheduleNotifications = params => {
    try {
      PushNotification.localNotificationSchedule({
        title: 'Hurry Up!',
        date: new Date(allTexts.headings.pushNotificationReminderWalima),
        message:
          'Please Join us on Time!  We request the pleasure of your company!',
        allowWhileIdle: false,
        channelId: '123',
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    createChannelForNotifications();
    ScheduleNotifications();
  }, []);

  const NameTitle = ({name, desc}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 40,
            color: colors.lightYellow2,
            fontFamily: fontFamily.michele,
            textAlign: 'center',
          }}>
          {name}
        </Text>
      </View>
    );
  };

  const HeadingTitle = ({heading, desc, fontSize}) => {
    return (
      <View style={{marginTop: 10}}>
        <Text
          style={{
            fontSize: fontSize || 15,
            color: colors.lightYellow2,
            fontFamily: fontFamily.popinRegular,
            // textTransform: 'capitalize',
            textAlign: 'center',
          }}>
          {heading}
        </Text>
        <Text
          style={{
            marginTop: 5,
            textAlign: 'center',
            textTransform: 'capitalize',
            fontSize: 15,
            color: colors.Yellow3,
            fontFamily: fontFamily.popinBold,
          }}>
          {desc}
        </Text>
      </View>
    );
  };
  const openMaps = (latitude, longitude) => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${parseFloat(latitude)},${parseFloat(longitude)}`;
    const label = `Sabzazar Ganjshakar Park`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
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
          }}
          style={{flex: 1}}>
          <View
            style={{
              // borderWidth: 2,
              alignItems: 'center',
              marginTop: 40,
              justifyContent: 'space-between',
            }}>
            <NameTitle name={'Walima Ceremony '} />
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.lightYellow2,
                  fontFamily: fontFamily.michele,
                }}>
                {'of'}
              </Text>
            </View>
            <NameTitle name={allTexts.headings.groom} />
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 25,
                  color: colors.lightYellow2,
                  fontFamily: fontFamily.michele,
                }}>
                {'With'}
              </Text>
            </View>
            <NameTitle name={allTexts.headings.bride} />
          </View>
          <View
            style={{
              borderColor: colors.lightYellow2,
              borderTopWidth: 2,
              marginTop: 20,
              width: '90%',
              alignItems: 'center',
            }}>
            <HeadingTitle
              heading={'InshaAllah! the function will be held on'}
              desc={allTexts.headings.WalimaDate}
            />
            <View style={{height: 10}} />
            <HeadingTitle heading={'Time'} desc={'07:00PM to 10:00PM'} />
            <View style={{height: 5}} />
            <HeadingTitle
              heading={'venue'}
              desc={allTexts.headings.WalimaVenu}
            />
            <View style={{height: 8}} />
            <HeadingTitle
              fontSize={12}
              heading={allTexts.headings.WalimaVenuDetails}
              desc={''}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              openMaps(31.530024637601947, 74.2626613103224);
            }}
            style={{
              width: '90%',
              backgroundColor: colors.Yellow3,
              padding: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                textTransform: 'capitalize',
                fontSize: 15,
                color: colors.black,
                fontFamily: fontFamily.popinRegular,
              }}>
              {'route for event'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Walima;
