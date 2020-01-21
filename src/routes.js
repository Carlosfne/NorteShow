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
        title: 'Agrishow Digital'
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
        title: 'Informações'
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
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#27ae60'
      }
    },
  })
);

export default Routes;