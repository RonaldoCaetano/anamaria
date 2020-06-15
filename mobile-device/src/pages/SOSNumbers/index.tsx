import React, { useEffect, useState, FunctionComponent } from 'react'
import { View, Text, ScrollView, Linking, AsyncStorage } from 'react-native'
import api from './../../api'

import styles from './styles'
import { useRoute } from '@react-navigation/native'

interface SOSNumbersProps {
    state: string
}

const SOSNumbers: FunctionComponent<SOSNumbersProps> = () => {

    const [sosNumbers, setSosNumbers] = useState<SOSNumberResponse[]>([])

    const routeParams: any = useRoute().params

    useEffect(() => {
        AsyncStorage.getItem('SOSNumbers', (err, result) => {
            if (!result) {
                api.get(`/sos/${routeParams.state}`).then(({ data }) => {
                    setSosNumbers(data)
                    AsyncStorage.setItem('SOSNumbers', JSON.stringify(data))
                })
            } else {
                setSosNumbers(JSON.parse(result))
            }
        })
    }, [])

    return (
        <View style={styles.sosContainer}>
            <Text style={{ fontSize: 30, marginTop: 20 }}>Números SOS - São Paulo</Text>
            <ScrollView style={{ width: '100%', marginTop: 20 }}> 
                {sosNumbers.map((sos: SOSNumberResponse, index: number) => (
                    <View style={styles.sosItem} key={index}>
                        <Text style={styles.concessionaria}>{sos.nom_concessionaria}</Text>
                        <Text onPress={() => Linking.openURL(`tel:${sos.num_telefone}`)} style={styles.telefone}>{sos.num_telefone}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default SOSNumbers