import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador} </Text>

      <TouchableOpacity style={style.fabLocationBR} onPress={() => setContador(contador + 1)}>
        <View style={style.fab1}>
          <Text style={style.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={style.fabLocationBL} onPress={() => setContador(contador - 1)}>
        <View style={style.fab2}>
          <Text style={style.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    top: -15,
    color: 'black',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab1: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fab2: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});
