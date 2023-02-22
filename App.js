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

  const [taskText, setTaskText] = useState('');
  const [showClosedList, setShowClosedList] = useState(false); // State variable to keep track of which button was pressed

  const [openTasks, setOpenTasks] = useState([]);
  const [closedTasks, setClosedTasks] = useState([]);


  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setOpenTasks([...openTasks, taskText]);
      setTaskText('');
    }
  };

  const handleAddClosedTask = () => {
    if (taskText.trim() !== '') {
      if (closedTasks.length < 3) {
        setClosedTasks([...closedTasks, taskText]);
        setTaskText('');
      } else {
        Alert.alert('Maximum of 3 tasks reached in closed list');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Open List</Text>
        <View style={styles.items}>
          {openTasks.map((task, index) => (
            <Task key={index} text={task} onPress={() => setOpenTasks(openTasks.filter((_, i) => i !== index))} />
          ))}
        </View>
        <Text style={styles.sectionTitle}>Closed List</Text>
        <View style={styles.items}>
          {closedTasks.map((task, index) => (
            <Task key={index} text={task} isClosed onPress={() => setClosedTasks(closedTasks.filter((_, i) => i !== index))} />
          ))}
        </View>
      </View>
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
        />
        <TouchableOpacity style={styles.addWrapper} onPress={showClosedList ? handleAddClosedTask : handleAddTask}>
          <Text style={styles.addText}>{showClosedList ? 'C' : '+'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.toggleClosedListBtn} onPress={() => setShowClosedList(!showClosedList)}>
        <Text style={styles.toggleClosedListBtnText}>{showClosedList ? 'Show Open List' : 'Show Closed List'}</Text>
      </TouchableOpacity>
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

