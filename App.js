import React, { useState, useEffect, useRef } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import api from "./src/services/api";

export default function App() {
  const inputRef = useRef(null);

  const [buscaCep, setBuscaCep] = useState("");
  const [loading, setLoading] = useState(true);

  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();

  function limpar() {
    setBuscaCep("");
    inputRef.current.focus();
  }

  async function mostraCep() {
    if (buscaCep == "") {
      alert("Digite um cep valido!");
      setBuscaCep("");
      return;
    }

    try {
      const response = await api.get(`${buscaCep}/json`);

      let cep = response.data["cep"];
      let logradouro = response.data["logradouro"];
      let bairro = response.data["bairro"];
      let cidade = response.data["localidade"];
      let estado = response.data["uf"];
      setCep(cep);
      setLogradouro(logradouro);
      setBairro(bairro);
      setCidade(cidade);
      setEstado(estado);
      Keyboard.dismiss();
      setLoading(false);

      Keyboard.dismiss()
    } catch (error) {
      console.log(`ERROR ${error}`);
    }
  }

  function limpar() {
    setBuscaCep("");
    inputRef.current.focus();
  }

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator color="#fff" size={45} />
  //     </View>
  //   );
  // }else{

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaCep}>
        <Text style={styles.titulo}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.inputCep}
          placeholder="Ex. 57603145"
          value={buscaCep}
          onChangeText={(valor) => setBuscaCep(valor)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={mostraCep}
          style={[styles.botao, { backgroundColor: "#18a9fd" }]}
        >
          <Text style={styles.textoBtn}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limpar}
          style={[styles.botao, { backgroundColor: "#b41919" }]}
        >
          <Text style={styles.textoBtn}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaResultado}>
        <Text style={styles.textoResultado}>CEP: {cep}</Text>
        <Text style={styles.textoResultado}>Logradouro: {logradouro}</Text>
        <Text style={styles.textoResultado}>Bairro: {bairro}</Text>
        <Text style={styles.textoResultado}>Cidade: {cidade}</Text>
        <Text style={styles.textoResultado}>Estado: {estado}</Text>
      </View>
    </SafeAreaView>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 25,
    marginTop: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
  areaCep: {
    alignItems: "center",
  },
  inputCep: {
    backgroundColor: "#cec2c2",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    margin: 20,
    padding: 20,
    borderRadius: 8,
  },
  textoBtn: {
    fontSize: 25,
  },
  areaResultado: {
    alignItems: "center",
    marginTop: 40,
  },
  textoResultado: {
    fontSize: 20,
  },
});
