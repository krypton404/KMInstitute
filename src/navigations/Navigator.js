import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Cources from '../screens/Cources';
import NoticeList from '../screens/NoticeList';
import Notice from '../screens/Notice';
import FillDetails from '../screens/FillDetails';
import FirstPage from '../screens/FirstPage';

import Password from '../screens/Password';
import OTP from '../screens/OTP';
import PdfPage from '../screens/PdfPage';
import PDFList from '../screens/PDFList';
import About from '../screens/About';
import AdminScreen from '../screens/AdminScreen';

const stackNavigatorOptions = {
  headerShown: false,
};
const AppNavigator = createStackNavigator(
  {
    Login: {screen: FirstPage},
    Home: {screen: Home},
    Password: {screen: Password},
    OTP: {screen: OTP},
    FillDetails: {screen: FillDetails},
    Cources: {screen: Cources},
    NoticeList: {screen: NoticeList},
    Notice: {screen: Notice},
    Pdf: {screen: PdfPage},
    PDFList: {screen: PDFList},
    About: {screen: About},
    Admin: {screen: AdminScreen},
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  },
);
export default createAppContainer(AppNavigator);
