import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, {useEffect, useState} from 'react';

export default function AgendaScreen({navigation}){
  const [ items, setItems] =  useState([]);

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          items[strTime].push({
            name: name,
            desc: des,
            height: Math.max(50, Math.floor(Math.random() * 150)),
          });
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginLeft: 25, marginTop: 17}}>
            <View>
              <Text style={{fontWeight: 'bold', marginBottom: 10, marginTop: 12}}>{item.name}</Text>
              <Text style= {{marginLeft: 20,}}>{item.desc}</Text>
            </View>
      </TouchableOpacity>
    );
  };

  const[showEventModal, setEventModal] = useState(false);
  const[name, setName] = useState('');
  const[des, setDes] = useState('');

  return (
    <View style={{flex: 1}}>
      <Modal
          visible={showEventModal}
          transparent
          onRequestClose={() => setEventModal(false)}
          animationType='slide'
          hardwareAccelerated
      >
        <View style={styles.imgModal}>
            <View style={styles.createEWrapper}>
                <View>
                    <Text style={styles.title}> Create an Event </Text>
                </View>
                <View>
                  <Text style={styles.subtitle}> Title </Text>
                  <TextInput style={styles.input} placeholder={'Event Title'} value={name} onChangeText={(value) => setName(value)}/>

                  <Text style={styles.subtitle}> Description </Text>
                  <TextInput style={styles.input2} placeholder={'Description Here'} value={des} onChangeText={(value) => setDes(value)}/>
                </View>
            </View>
            <TouchableOpacity style={styles.savebtn} onPress={() => setEventModal(false)}>
                <Text style={styles.saveLabel}> Save </Text>
            </TouchableOpacity>
        </View>
    </Modal>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        onDayPress={day => {
          setEventModal(true)
        }}
        />
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
  imgModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  createEWrapper: {
    width: 300,
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 15,
    paddingTop: 10,
    marginLeft: 15,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 16,
    left: 30,
    borderBottomWidth: 1,
    borderColor: "#f4a261",
    marginLeft: 15,
  },
  input2: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 16,
    left: 30,
    height: 100,
    borderWidth: 1,
    borderColor: "#f4a261",
    marginLeft: 15,
  },
  savebtn: {
    borderRadius: 15,
    backgroundColor: "#f4a261",
    marginBottom: 10,
    width: 100,
    marginTop: -80,
  },
  saveLabel: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    color: '#fff',
  },
});
