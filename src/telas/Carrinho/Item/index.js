import React, { useState } from 'react';
import { Text, View } from 'react-native';

import estilos from './estilos';
import Campointeiro from '../../../componentes/CampoInteiro/Index';
import Botao from '../../../componentes/Botao/Index';

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);
  const [total, setTotal] = useState(preco * quantidadeInicial);
  // const [valorTotal, setValorTotal] = useState(total);

  // const atualizaValorTotal = (total, preco) => {
  //   setValorTotal(total + preco * quantidadeInicial)
  // }
  // console.log(total)

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
    // atualizaValorTotal(total, preco)
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  }

  return <>
    <View style={estilos.informacao}>
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.descricao}>{descricao}</Text>
      <Text style={estilos.preco}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(preco)
      }</Text>
    </View>
    <View style={estilos.carrinho} >
      <View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Quantidade:</Text>
          <Campointeiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
        </View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Total:</Text>
          <Text style={estilos.preco}>{
            Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(total)
          }</Text>
        </View>
      </View>
      <Botao valor='Remover do carrinho' acao={() => { }} />
    </View>
    <View style={estilos.divisor} />
  </>
}