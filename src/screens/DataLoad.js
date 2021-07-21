import UserDetails from '../components/UserDetails';
import Data from '../../data.json';
import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function DataLoad({navigation}) {
  const [data, setData] = useState(Data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.margin}>
            <TouchableOpacity
              onPress={function () {
                Alert.alert(`
                  Name: ${item.name},\n
                  UserName: ${item.username},
                  Email: ${item.email},
                  Phone: ${item.phone},
                  Zipcode: ${item.address.zipcode},
                `);
              }}>
              <Text>
                {item.name}
                <Text style={styles.align}>{'>'}</Text>
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={({id}) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  align: {
    textAlign: 'left',
    flexDirection: 'row-reverse',
    fontWeight: 'bold',
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
});
