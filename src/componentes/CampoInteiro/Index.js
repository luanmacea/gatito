import { TextInput } from 'react-native';

import estilosPadrao from './estilos';

export default function Campointeiro({valor, estilos, acao }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificarInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificarInteiro) return;

    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');

    acaoRetorno(removeZeroEsquerda, verificarInteiro);
  }
  const numeroString = String(valor);
  return <TextInput
  style={[estilosPadrao.campo, estilos]}
  // keyboardType='number-pad'
  selectTextOnFocus
  onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
  value={numeroString}
  />
}