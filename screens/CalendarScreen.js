import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function CalendarScreen({navigation}){
  return (
    <CalendarList
        // Max amount of months allowed to scroll to the past
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator
        showScrollIndicator={true}
    />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
