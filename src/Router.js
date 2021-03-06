import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/LoginScreen';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: "Bem vindo!",
    }
  },
  'Main': {
    screen: SeriesPage,
  },
  'SerieForm': {
    screen: SerieFormPage,
    navigationOptions: ({ navigation }) => {
      if (navigation.state.params && navigation.state.params.serieToEdit) {
        return {
          title: navigation.state.params.serieToEdit.title,
        }
      }
      return {
        title: "New Serie",
      }
    }
  },
  'SerieDetail': {
    screen: SerieDetailPage,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return {
        title: serie.title,
      }
    }
  },
}, {
  defaultNavigationOptions: {
    title: "Series",
    headerStyle: {
      backgroundColor: "#6ca2f7",
      borderBottomWidth: 1,
      borderBottomColor: "#C5C5C5",
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 30,
    },
    headerTintColor: "white",
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
