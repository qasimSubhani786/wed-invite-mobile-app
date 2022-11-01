import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const fontSize = {
  iconSize: 70,
  title: 32,
  h1: 30,
  h2: 28,
  h3: 26,
  h4: 25,
  h5: 24,
  h6: 22,
  xxlarge: 20,
  xlarge: 19,
  large: 18,
  medium: 17,
  average: 18.5,
  normal: 16,
  normalHalf: 15.5,
  small: 15,
  xsmall: 14,
  xxsmall: 13,
  tiny: 12,
  xtiny: 11,
  xxtiny: 10,
  xxxtiny: 9,
  xxxtinyH: 9.5,
  big: 20,
  xbig: 27,
  xxbig: 29,
};
const fontFamily = {
  semiBold: 'Lato-Semibold',
  bold: 'Lato-Bold',
  extraBold: 'Lato-Heavy',
  medium: 'Lato-Medium',
  regular: 'Lato-Regular',
  thin: 'Lato-thin',
  light: 'Lato-Light',
  hairline: 'Lato-Hairline',
  black: 'Lato-Black',
  pangram: 'pangram',
  popinRegular: 'Poppins-Regular',
  popinBold: 'Poppins-Bold',
  popinLight: 'Poppins-Light',
  popinMedium: 'Poppins-Medium',
  popinSemi: 'Poppins-SemiBold',
  michele: 'MichelleRegular-lgw7q',
  trajanBold: 'TrajanPro-Bold',
  trajanRegular: 'TrajanPro-Regular',
};

const window = {
  width,
  height,
};

// updated colors being used in all ober the project
const colors = {
  orangeColor: '#FF3400',
  red2: '#CB0000',
  yellowColor: '#FFE600',
  gold: '#FC9605',
  black: '#000',
  green: '#31932A',
  primaryColor: '#52343E',
  lightMeron: '#634851',
  white: '#FFF',
  lightYellow: '#F4C256',
  lightYellow2: '#FFEDC5',
  Yellow3: '#F4C256',
};

export {fontSize, fontFamily, window, colors};
