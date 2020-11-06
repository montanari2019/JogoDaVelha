import React, { useEffect, useState } from 'react'
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


const GAME_RESET = [[null, null, null], [null, null, null], [null, null, null]]
const TURNO_RESET = null
const TURNO_O = "O"
const TURNO_X = "X"

export default function App() {
  const [valores, setValores] = useState(GAME_RESET)
  const [atualTurno, setAtualTurno] = useState(TURNO_RESET)

  useEffect(() => {
    console.log(valores)
  }, [valores])

  const reset = () => setValores(GAME_RESET)

  const selectButtonValue = (positions) => {
    if (valores[positions[0]][positions[1]] != TURNO_RESET) {
      return
    }

    if (atualTurno == TURNO_RESET) {
      alert("O jogo ainda não começou, selecione uma das opções abaixo")
      return
    }

    const newValues = [...valores]

    newValues[positions[0]][positions[1]] = atualTurno

    setValores(newValues)
    setAtualTurno(atualTurno == TURNO_O ? TURNO_X : TURNO_O)
    console.log(newValues)
  }

  return (
    <SafeAreaView style={styles.BG}>
      <ScrollView>

        <View>
          <Text style={styles.title}>JOGO DA VELHA</Text>
          <Text style={styles.Subtitle}>By Ikaro Montanari</Text>
          {atualTurno != TURNO_RESET && <Text style={styles.Subtitle}>Agora é a vez de {atualTurno}</Text>}
        </View>

        <View style={styles.gridArea}>

          {valores.map((linha, linhaIndex) => {
            return linha.map((coluna, colunaIndex) => {
              return <ButtonGame onPress={() => selectButtonValue([linhaIndex, colunaIndex])} key={`btn-${linhaIndex}-${colunaIndex}`} title={valores[linhaIndex][colunaIndex]} />
            })
          })
          }

        </View>

        {atualTurno == TURNO_RESET && <View style={styles.gridAreaFunction}>
          <ButtonFunction
            value='Escolha O'
            bola
            onPress={() => setAtualTurno(TURNO_O)}
          />
          <ButtonFunction
            value='Escolha X'
            x
            onPress={() => setAtualTurno(TURNO_X)}
          />
        </View>}
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
    fontSize: 40,
    color: '#F2F2F2',
    textAlign: 'center',
    margin: 20,
    marginBottom: 5
  },
  Subtitle: {
    fontSize: 12,
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




