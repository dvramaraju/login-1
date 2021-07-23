import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function UserDetails({route}) {
  const {name} = route.params;
  const {username} = route.params;
  const {email} = route.params;
  const {phone} = route.params;
  const {website} = route.params;

  return (
    <View style={styles.container}>
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
          Website: <Text style={styles.font200}>{website}</Text>
        </Text>
      </View>
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
  },
  font200: {
    fontWeight: '200',
    fontFamily: 'Merienda-Regular',
  },
  margin: {
    // margin: 10,
    padding: 20,
    backgroundColor: '#d1ca30',
    borderRadius: 10,
  },
});
