import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  TextInput, 
  View,
  TouchableOpacity,
  Alert, 
  Dimensions,
  KeyboardAvoidingView,
  ScrollView, 
  Button,
  Platform,
  Keyboard,
  
} from 'react-native';
import React, { useState } from 'react'
import Task from './components/Task';


export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* todays tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Open List</Text>

        <View style={styles.items}>
          {/* this is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Task key={index} text={item} onPress={() => completeTask(index)} />
                </TouchableOpacity>

              )
            })
          }
        </View>
      </View>

      {/* closed list container*/}
      <View style={styles.closedListWrapper}>
        {/* Closed List*/}
        <View>
          <Text style={styles.closedListTitle}>Closed List</Text>
        </View>

        {/* closed list items will go here */}

       


      </View>

      {/* write a task */}
      <KeyboardAvoidingView
        behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

        {/* button to add to closed list*/}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>C</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
  closedListTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  closedListWrapper: {
    paddingHorizontal: 20,

  }
  
});

