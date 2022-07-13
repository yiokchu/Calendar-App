import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';

import Agen from './AgendaScreen';
import Calen from './CalendarScreen';
import HomeScreen from './HomeScreen';

//Screen Names
const agendName = 'Agenda';
const calName = 'Calendar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeTabs(){
    return (
        <Tab.Navigator
            initialRouteName={agendName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === calName) {
                        iconName = focused? 'calendar' : 'calendar-outline';
                    }else if (rn === agendName) {
                        iconName = focused? 'book' : 'book-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={'#f4a261'}/>
                },
                tabBarLabel: ' ',
            })}>

            <Tab.Screen name={agendName} component={Agen} />
            <Tab.Screen name={calName} component={Calen}/>

            </Tab.Navigator>
    );
}


export default function Navigation(){
    return(        
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerTitleAlign: 'center',
                }}
            >

            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    
                }}
            />

            <Stack.Screen 
                name="Home"
                component={HomeTabs}
                options={{
                    headerShown: false,
                }}
            />
            
            </Stack.Navigator> 
        </NavigationContainer>
    );
}