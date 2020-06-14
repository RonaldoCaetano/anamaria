import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function App() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Image
        style={styles.logotipo}
        source={require('../../../assets/perfil.png')}
      />

			<Text style={styles.cadastrarHeaderText}>Seu Pefil</Text>
    
     <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="#12345"
          placeholderTextColor="#FFF" />
      </View>
      
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="JOAO MARCOS FERNANDES"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          value="XXXXXXXXXXXXXXXXXXXXXXX"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="marquinho.joao.pf@gmail.com"
          placeholderTextColor="#FFF" />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="11954769550"
          placeholderTextColor="#FFF" />
      </View>
      <TouchableOpacity style={styles.cadastrarBtn}>
        <Text style={styles.cadastrarText}>SALVAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.salvarBtn} onPress={() => navigation.navigate('CadastroVeiculos')}>
        <Text style={styles.cadastrarText}>ADICIONAR VEÍCULO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Jornadas')}>
        <Text style={styles.cadastrarText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
