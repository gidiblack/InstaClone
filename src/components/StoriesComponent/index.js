import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Story from '../Story';

const data = [
  {
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    name: 'avatar',
  },
  {
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    name: 'avatar1',
  },
  {
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    name: 'avatar2',
  },
  {
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    name: 'avatar3',
  },
  {
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    name: 'avatar4',
  },
  {
    imageUri: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    name: 'avatar5',
  },
];
const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ name }) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
      style={styles.container}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    marginBottom: 5,
  },
});
