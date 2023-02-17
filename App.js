import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView} from 'react-native';

export default function App() {
  const [cep,setCep]= useState("")
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputArea}>
      <Text style={styles.inputAreaText}>Insira o Cep Que deseja procurar</Text>
      <TextInput placeholder='insira o cep:' style={styles.input} value={cep} onChangeText={(valor)=>{setCep(valor)}} keyboardType="numeric"/>
      </View>

      <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.btnArea}>
      <Text style={styles.btnText}>Procurar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btnArea,{backgroundColor:"#F02849"}]}>
      <Text style={[styles.btnText]}>Apagar</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  inputArea:{
    alignItems:'center'
  },
  inputAreaText:{
    marginTop:25,
    marginBottom:15,
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
  backgroundColor:"#fff",
  borderColor:"#DDD",
  borderWidth:1,
  borderRadius:5,
  width:"90%",
  padding:10,
  fontSize:18
  },
  containerButtons:{
    flexDirection:'row',
 alignItems:'center',
 marginTop:15,
 justifyContent:'space-around'
  },
  btnArea:{
    height:50,
    padding:5,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#1B74E4"
  },
  btnText:{
    fontSize:22,
    fontWeight:'bold',
    color:"#fff"
  }
});
