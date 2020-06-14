import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logotipo}
        source={require('../../../assets/logotipo.png')}
      />
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Usuário..."
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Senha..."
          placeholderTextColor="#FFF" />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}