import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Story from '../Story';

const data = [
  {
    category: 'clothing',
    id: 3,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    category: 'electronics',
    id: 11,
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  },
  {
    category: 'jewelery',
    id: 7,
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    category: 'clothing',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    category: 'electronics',
    id: 13,
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  },
  {
    category: 'jewelery',
    id: 8,
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    category: 'clothing',
    id: 4,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    category: 'electronics',
    id: 10,
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({ id }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Story imageUri={item.image} name={item.category} />
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
