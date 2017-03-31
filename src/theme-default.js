import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  orangeA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
  blue600, brown50
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const themeDefault = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: orangeA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: brown50
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;
