import React from 'react'
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native'

export default function (props) {
    return (
        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.buttonGame}>
                <Text style={styles.titleButonGame}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonGame: {
    
        backgroundColor: '#f2f2f2',
        height: Dimensions.get('window').width / 3.5,
        width: Dimensions.get('window').width / 3.5,
        borderRadius: 5,
        justifyContent: 'center',
        
    },
    titleButonGame: {
        fontSize: 40,
        color: '#252525',
        textAlign: 'center',
        
    },
    buttonArea:{
        paddingBottom: 20,
    }
})


