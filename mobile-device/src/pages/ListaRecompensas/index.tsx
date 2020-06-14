import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import styles from './styles'

export default function App() {
  return (

    <ScrollView style={styles.scroll}>
    <View style={styles.container}>

      <Text style={styles.esquecerHeaderText}>Programa de Milhas</Text>
      <TouchableOpacity style={styles.novaJornada}>
              <Text style={styles.text}>TRANSFERIR PONTOS</Text>
      </TouchableOpacity>

      <Text style={styles.esquecerHeaderText}>Você andou: 180.000 KM</Text>

      <TouchableOpacity>
        <View style={styles.card}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.logotipo} source={require('../../../assets/oculossol.png')} />
            <Text style={styles.esquecerHeaderText}>01 ÓCULOS DE SOL</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Necessário: 10.000 KM</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Posto de Retirada: Rod. Pres. Castello Branco, KM 24</Text>
          </View>

        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.card}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.logotipo} source={require('../../../assets/revisao.png')} />
            <Text style={styles.esquecerHeaderText}>01 REVISÃO ANUAL</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Necessário: 500.000 KM</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Posto de Retirada: Rod. Pres. Castello Branco, KM 24</Text>
          </View>

        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.card}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image style={styles.logotipo} source={require('../../../assets/pneus.png')} />
            <Text style={styles.esquecerHeaderText}>01 JOGO DE PNEUS</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Necessário: 1.000.000 KM</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.esquecerText}>Posto de Retirada: Rod. Pres. Castello Branco, KM 24</Text>
          </View>

        </View>
      </TouchableOpacity>

    </View>
    </ScrollView>
  )
}