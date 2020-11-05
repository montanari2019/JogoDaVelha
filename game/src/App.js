import React, { useState } from 'react'
import {
    SafeAreaView,
    View,
    ScrollView,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native'


import ButtonGame from './components/buttonGame'
import ButtonFunction from './components/buttonFuncional'

export default function App(){

  return (
    <SafeAreaView style={styles.BG}> 
    <ScrollView>

      <View>
          <Text style={styles.title}>JOGO DA VELHA</Text>
          <Text style={styles.Subtitle}>By Ikaro Montanari</Text>
      </View>

      <View style={styles.gridArea}>

          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />
          <ButtonGame 
            title='O'
          />

   </View>

   <View style={styles.gridAreaFunction}>
        <ButtonFunction
          value='Escolha O'
          bola
        />
        <ButtonFunction
          value='Escolha X'
          x
        />
   </View>
   </ScrollView> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: '#576269',
    height: Dimensions.get('window').width * 9
  },
  title: {
    fontSize:40,
    color: '#F2F2F2',
    textAlign: 'center',
    margin: 20, 
    marginBottom: 5   
  },
  Subtitle: {
    fontSize:12,
    color: '#F2F2F2',
    textAlign: 'center',
    marginBottom: 15  
  },
  gridArea: {
    margin: 10,
    marginBottom: 0,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridAreaFunction: {
    margin: 18,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
})




