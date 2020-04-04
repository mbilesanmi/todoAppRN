import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodoItem from './components/AddTodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'buy soya', key: '2' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key !== key))
  }

  const submitHandler = (text) => {
    if (text.length <= 3) {
      Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    } else {
      setTodos(prevTodos => {
        return [
          { text, key: prevTodos.length + 1 },
          ...prevTodos,
        ]
      });
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* HEADER */}
        <Header />
        <View style={styles.content}>
          {/* TODO FORM */}
          <AddTodoItem submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
