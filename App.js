import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/TelaPadrao/Index';
import Rotas from './src/Rotas';

Reactotron.configure().useReactNative().connect();

export default function App() {
  console.log("asdsssss")
  return <TelaPadrao>
    <Rotas />
  </TelaPadrao>
}