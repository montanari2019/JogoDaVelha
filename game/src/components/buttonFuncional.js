import React from 'react'
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'

export default function (props) {

    const { bola, x, value, key, ...demaisProps } = props

    const estiloBtn = [styles.titleButonFunction]

    if (bola) {
        estiloBtn.push(styles.btnBola)
    }
    else if (x) {
        estiloBtn.push(styles.btnX)
    }

    return (
        <View>
            <TouchableOpacity {...demaisProps} style={estiloBtn}>
                <Text style={styles.titleButonFunction}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonFunciation: {
        backgroundColor: '#f2f2f2',
        height: Dimensions.get('window').width / 7,
        width: Dimensions.get('window').height / 4,
        justifyContent: 'center',
        borderRadius: 10,


    },
    titleButonFunction: {
        fontSize: 20,
        color: '#252525',
        textAlign: 'center',

    },
    buttonAreaFunction: {
        paddingBottom: 30,
    },
    btnX: {
        backgroundColor: '#8685EF',
        height: Dimensions.get('window').width / 7,
        width: Dimensions.get('window').height / 4,
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnBola: {
        backgroundColor: '#00C896',
        height: Dimensions.get('window').width / 7,
        width: Dimensions.get('window').height / 4,
        justifyContent: 'center',
        borderRadius: 10,
    }
})


