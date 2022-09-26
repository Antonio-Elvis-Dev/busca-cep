import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.areaCep}>
        <Text style={styles.titulo}>Digite o CEP desejado</Text>
        <TextInput style={styles.inputCep} placeholder="Ex. 57603145" />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#18a9fd" }]}
        >
          <Text style={styles.textoBtn}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#b41919" }]}
        >
          <Text style={styles.textoBtn}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaResultado}>
        <Text style={styles.textoResultado}>CEP:</Text>
        <Text style={styles.textoResultado}>Logradouro:</Text>
        <Text style={styles.textoResultado}>Bairro:</Text>
        <Text style={styles.textoResultado}>Cidade:</Text>
        <Text style={styles.textoResultado}>Estado:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titulo: {
    fontSize: 45,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  areaCep: {
    width: "90%",
    marginTop: 40,
    backgroundColor: "#f9f9f9",
    paddingBottom: 9,
    paddingTop: 9,
  },
  inputCep: {
    width: "100%",
    padding: 10,
    height: 60,
    fontSize: 25,
    marginTop: 8,
    color: "#000",
    backgroundColor: "#cec2c2",
    borderRadius: 8,
  },
  areaBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  botao: {
    marginTop: 10,
    marginRight: 60,
    marginLeft: 60,
    padding: 20,
    borderRadius: 8,
  },
  textoBtn: {
    fontSize: 30,
  },
  areaResultado:{
    alignItems:"center",
    marginTop:40,
  },
  textoResultado:{
    fontSize:40,

  }
});
