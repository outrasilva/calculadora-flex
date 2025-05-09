import React, { useState } from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    tipo: 0,
    data: '01/01/2025',
    preco: 6.77,
    valor: 100,
    odometro: 22000,
  },
  {
    id: 1,
    tipo: 1,
    data: '20/01/2025',
    preco: 4.77,
    valor: 150,
    odometro: 25000,
  },
  
];

const Gastos = () =>{

  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => (
    <List.Item
      title={
        "R$" + item.valor.toFixed(2) + " (R$" +item.preco.toFixed(2)+ ")"
      }
      description={item.odometro + 'km'}
      left={(props) => (
        <List.Icon 
          {...props} 
          color={ item.tipo == 0 ? 'red' : 'green'} 
          icon="gas-station" />
        )}

      right={(props) => (
        <Text {...props} style={{alignSelf:'center'}}>
          {''} 
          {item.data} {''}
        </Text>
      )}
      onPress={() => navigation.navigate('Abastecimento', {item})}
    />
);

  return(
    <Container>
      <Header title={'Fuel Manager'} />
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );

};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;