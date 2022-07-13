import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function HomeScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
    }, []);

  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require('../assets/CalendarAppLogo.png')}
        />
      <Text style={styles.text}>
          Calendar 
          <Text style={styles.innertext}> App </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 350,
  },
  text: {
    color: '#f4a261',
    fontSize: 50,
    fontWeight: 'bold',
  },
  innertext: {
    color: '#48cae4',
    fontSize: 50,
    fontWeight: 'bold',
  }
});
