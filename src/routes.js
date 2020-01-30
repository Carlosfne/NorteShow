import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Atracoes from './pages/Atracoes';
import Expositores from './pages/Expositores';
import Planta from './pages/Planta';
import AgrishowDigital from './pages/AgrishowDigital';
import ComoChegar from './pages/ComoChegar';
import Informacoes from './pages/Informacoes';
import Duvidas from './pages/Duvidas';
import Contato from './pages/Contato';
import Settings from './pages/Settings'
import Menu from './components/menu'


const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions:{
        title: 'Norte Show 2020'
      }
    },
    Atracoes:{
      screen: Atracoes,
      navigationOptions:{
        title: 'Atrações'
      }
    },
    Expositores:{
      screen: Expositores,
      navigationOptions:{
        title: 'Expositores'
      }
    },
    Planta:{
      screen: Planta,
      navigationOptions:{
        title: 'Planta'
      }
    },
    AgrishowDigital:{
      screen: AgrishowDigital,
      navigationOptions:{
        title: 'Norte Show Digital'
      }
    },
    ComoChegar:{
      screen: ComoChegar,
      navigationOptions:{
        title: 'Como Chegar'
      }
    },
    Informacoes:{
      screen: Informacoes,
      navigationOptions:{
        title: 'Hotel'
      }
    },
    Duvidas:{
      screen: Duvidas,
      navigationOptions:{
        title: 'Dúvidas'
      }
    },
    Contato:{
      screen: Contato,
      navigationOptions:{
        title: 'Contato'
      }
    },
    Settings:{
      screen: Settings,
      navigationOptions:{
        title: 'Extra'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#317b79'
      }
    },
  })
);

export default Routes;