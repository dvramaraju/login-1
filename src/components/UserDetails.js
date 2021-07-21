import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function UserDetails({
  name,
  username,
  email,
  phone,
  website,
  address,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => (
          <View style={styles.margin}>
            <Text style={styles.bold}>
              Name: <Text style={styles.font200}>{name}</Text>
            </Text>
            <Text style={styles.bold}>
              User Name: <Text style={styles.font200}>{username}</Text>
            </Text>
            <Text style={styles.bold}>
              Email: <Text style={styles.font200}>{email}</Text>
            </Text>
            <Text style={styles.bold}>
              Phone: <Text style={styles.font200}>{phone}</Text>
            </Text>
            <Text style={styles.bold}>
              website: <Text style={styles.font200}>{website}</Text>
            </Text>
            <Text style={styles.bold}>
              Address: <Text style={styles.font200}>{address}</Text>
            </Text>
          </View>
        )}
        keyExtractor={({id}) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    marginTop: '45%',
  },
  display: {
    display: 'flex',
  },
  font200: {
    fontWeight: '200',
  },
  margin: {
    // margin: 10,
    padding: 20,
    backgroundColor: '#d1ca30',
    borderRadius: 10,
  },
});
