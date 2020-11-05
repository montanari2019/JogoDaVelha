import React from 'react'
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'

export default function (props) {

    const estiloBtn = [styles.titleButonFunction]

    if(props.bola){
        estiloBtn.push(styles.btnBola)
    }
    else if(props.x){
        estiloBtn.push(styles.btnX)
    }

    return (
        <View>
            <TouchableOpacity style={estiloBtn}>
                <Text style={styles.titleButonFunction}>
                    {props.value}
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
    titleButonFunction:{
        fontSize: 20,
        color: '#252525',
        textAlign: 'center',
        
    },
    buttonAreaFunction:{
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


