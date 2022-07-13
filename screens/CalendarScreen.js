import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

/*
<View style={styles.container}>
      
    <Calendar
        style={[styles.calendar, {width: 400, height: 200}]}
        dayComponent={({date, state}) => {
            return (
            <View>
                <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text>
            </View>
            );
        }}
        /> 
    </View>
*/


export default function CalendarScreen({navigation}){
  return (
    <CalendarList
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
    />

    /*
    <View style={styles.container}>
        <Calendar
          style={{ 
            height: "100%",
          }}
          dayComponent={(e) => {
            return (
              <View style={{ width: 40, height: 40, backgroundColor:"orange"}}>
                <Text> {e.date.day}</Text>
              </View>
            )
          }}
          renderHeader = {(date) => {
            return (
              <Text style={{fontWeight: 'bold', color: 'black'}}> 
                {date.getMonth()}
              </Text>
            )
          }}
          theme = {
            {
              arrowColor: 'black',
            }
          }
          hideExtraDays
          markingType={'custom'}
          markedDates={{
            '2022-07-28': {customStyles:{container:{backgroundColor:'black', elevation:2}, text:{color:'white'}}}
          }}
        />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
