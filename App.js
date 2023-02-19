
import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  const inputRef= useRef(null)

  
  async function search(){
  
    if (cep==""){
      alert("Digite um cep valido!")
      setCep("")
      return
    }

  
    const response = await api.get(`${cep}/json/`)
    
    console.log(response.data)
  
   
  
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.inputAreaText}>
          Insira o Cep Que deseja procurar
        </Text>
        <TextInput
          placeholder="insira o cep:"
          style={styles.input}
          value={cep}
          onChangeText={(valor) => {
            setCep(valor);
          }}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.btnArea} onPress={search}>
          <Text style={styles.btnText}>Procurar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnArea, { backgroundColor: "#F02849" }]}
          onPress={()=>{setCep("")
        inputRef.current.focus()
        }}>
          <Text style={[styles.btnText]}>Apagar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.results}>
      <Text style={styles.itemResults}>Cep:923948</Text>
      <Text style={styles.itemResults}>logradouro:923948</Text>
      <Text style={styles.itemResults}>bairro:rio jordao</Text>
      <Text style={styles.itemResults}>cidade:923948</Text>
      <Text style={styles.itemResults}>estado:pe</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputArea: {
    alignItems: "center",
  },
  inputAreaText: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  containerButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    justifyContent: "space-around",
  },
  btnArea: {
    height: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#1B74E4",
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  results:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  },
  itemResults:{
    fontSize:22,
    fontWeight:"bold"
  }
})
