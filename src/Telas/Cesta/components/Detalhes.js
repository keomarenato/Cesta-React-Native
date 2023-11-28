import { Image, StyleSheet, View, TouchableOpacity } from "react-native"
import { Texto } from "../../../components/Texto"
import { Botao } from "../../../components/Botao"


export const Detalhes = ({ nome, logoFazendo, nomeFazenda, descricao, preco, botao }) => {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.fazenda} >
        <Image source={logoFazendo} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}> {nomeFazenda}</Texto>
      </View>

      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>

      {/* TouchableOpacity é um botão do React-Native */}
      <Botao style={estilos.botao}>
        Comprar
      </Botao>
    </>
  )
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "bold"
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    margin: 8
  },

})