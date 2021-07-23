import Data from '../../data.json';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

export default function DataLoad({navigation}) {
  const [datas, setDatas] = useState([]);
  const fetchData = async () => {
    return await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(() => setDatas(datas))
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Search"
        keyboardType="default"
        placeholderTextColor="white"
      />
      <FlatList
        data={fetchData}
        renderItem={({item}) => (
          <View style={styles.margin}>
            <TouchableOpacity
              onPress={function () {
                navigation.navigate('DetailScreen', {
                  name: item.name,
                  username: item.username,
                  email: item.email,
                  phone: item.phone,
                  website: item.website,
                });
              }}>
              <Text style={styles.fStyle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={({id}) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  align: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
  },
  fStyle: {
    fontFamily: 'Pacifico-Regular',
  },
  image: {
    height: 10,
    width: 10,
  },
  margin: {
    margin: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: '#d2fc03',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#16A085',
    justifyContent: 'space-between',
  },
});
