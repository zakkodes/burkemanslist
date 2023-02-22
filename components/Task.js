import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const Task = (props) => {

  const { text, onPress, isClosed } = props;
  const [isCompleted, setIsCompleted] = useState(false)


  const toggleComplete = () => {
    setIsCompleted(!isCompleted)
  }

  return (
    <View style={[styles.item, isClosed && styles.closedItem]}>
      <View style={styles.itemLeft}>
        <View style={[styles.square, isClosed && styles.closedSquare]}></View>
        <Text style={[styles.itemText, isCompleted && styles.completedText]}>{text}</Text>
      </View>
    

      {!isClosed && (
        <View style={styles.circular}>
          <TouchableOpacity onPress={toggleComplete}>
            {isCompleted ? (
              <Icon name="check" size={12} color="#808080" />
            ) : (
              <View style={styles.circle}></View>
            )}
          </TouchableOpacity>
        </View>
      )}
      
      <TouchableOpacity onPress={onPress}>
        <Icon name="trash" size={24} color="#FF0000" />
      </TouchableOpacity>

      {/* {!isClosed && (
        <TouchableOpacity onPress={addToClosedList}>
          <Text style={styles.addToClosedList}>C</Text>
        </TouchableOpacity>
      )} */}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },

  itemText: {
    maxWidth: '80%',

  },

  circular: {
    width: 15,
    height: 18,
    marginTop: 3,
    borderColor: '#55BCF6',
    borderWidth: 2,
    boderRadius: 5,
    marginRight: 20,
  },
  
  closedSquare: {
    backgroundColor: "#E8EAED",
    opacity: 1,
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

})

export default Task