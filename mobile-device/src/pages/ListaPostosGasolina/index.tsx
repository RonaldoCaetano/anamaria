import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import styles from './styles'

export default function App() {
  return (

    <ScrollView style={styles.scroll}>
    <View style={styles.container}>

      <Text style={styles.esquecerHeaderText}>Posto de Gasolina</Text>
      <TouchableOpacity style={styles.novaJornada}>
              <Text style={styles.text}>ORDERNAR PELO MENOR PREÇO</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.card}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.logotipo} source={require('../../../assets/postosgasolina.png')} />
            <Text style={styles.esquecerHeaderText}>POSTO - SHELL 1</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Cidade: Barueri -SP</Text>
            <Text style={styles.esquecerText}>Valor: R$ 3,43</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Rod. Pres. Castello Branco, KM 24</Text>
            <Text style={styles.esquecerText}>Aberto</Text>
          </View>

          <View>
          <Image style={styles.estrelas} source={require('../../../assets/5estrelas.png')} />
          </View>

        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.card}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.logotipo} source={require('../../../assets/postosgasolina.png')} />
            <Text style={styles.esquecerHeaderText}>POSTO - IPIRAN 2</Text>        
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Cidade: Barueri -SP</Text>
            <Text style={styles.esquecerText}>Valor: R$ 3,44</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Rod. Pres. Castello Branco, KM 24</Text>
            <Text style={styles.esquecerText}>Fechado</Text>
          </View>

          <View>
          <Image style={styles.estrelas} source={require('../../../assets/5estrelas.png')} />
          </View>

        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.card}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.logotipo} source={require('../../../assets/postosgasolina.png')} />
            <Text style={styles.esquecerHeaderText}>POSTO - PETRO 3</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Cidade: Barueri -SP</Text>
            <Text style={styles.esquecerText}>Valor: R$ 3,70</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Rod. Pres. Castello Branco, KM 24</Text>
            <Text style={styles.esquecerText}>Fechado</Text>
          </View>

          <View>
          <Image style={styles.estrelas} source={require('../../../assets/5estrelas.png')} />
          </View>

        </View>
      </TouchableOpacity>

    </View>
    </ScrollView>
  )
}