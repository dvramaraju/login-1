import axios from 'axios';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function DataLoad({navigation}) {
  const [data, setData] = useState([
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res)
      .catch(error => console.error(error)),
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text>
            {item.id} : {item.name}
          </Text>
        )}
        keyExtractor={({id}) => id}
      />
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  image: {
    height: 10,
    width: 10,
  },
  margin: {
    margin: 10,
    padding: 10,
    backgroundColor: '#d2fc03',
  },
  display: {
    display: 'flex',
  },
});
