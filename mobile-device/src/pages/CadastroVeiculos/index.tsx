import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function App() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        style={styles.logotipo}
        source={require('../../../assets/caminhao.png')}
      />

     <Text style={styles.cadastrarHeaderText}>Seu Pefil</Text>

     <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="MARCA"
          placeholderTextColor="#FFF" />
      </View>
      
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="EIXOS"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="PLACA"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="CAPACIDADE DO TANQUE"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="DT. ULTIMA REVISAO"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="CONSUMO"
          placeholderTextColor="#FFF" />
      </View>
      <TouchableOpacity style={styles.salvarBtn}>
        <Text style={styles.cadastrarText}>ADICIONAR VEÍCULO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.cadastrarText} >Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}