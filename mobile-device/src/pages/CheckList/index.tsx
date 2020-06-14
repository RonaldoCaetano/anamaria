import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, CheckBox } from 'react-native'

import styles from './styles'

export default function App() {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.esquecerHeaderText}>CHECK-LIST</Text>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.esquecerHeaderText}>CTe, NFe, MDFe, CNH</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.esquecerHeaderText}>Suprimento de Água</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.esquecerHeaderText}>Suprimento de Roupas</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.esquecerHeaderText}>Revisão do Veículo</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.esquecerHeaderText}>Meios de Pagamento</Text>
            </View>

            <TouchableOpacity style={styles.esquecerBtn}>
                <Text style={styles.esquecerText}>PRONTO</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.esquecerText}>Ignorar check-list</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.esquecerText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
