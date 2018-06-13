import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';
import Meteor from 'react-native-meteor';

Meteor.connect('ws://192.168.178.74:3000/websocket');

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  },
  City: {
    screen: CityDetails,
    navigationOptions: {
      title: ({ state }) => state.params.name+"  ",
    },
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
});

export default Navigator;
