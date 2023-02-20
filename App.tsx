/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Pressable,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Tasks from './components/task';

function App(): JSX.Element {
  const [task, setTask] = React.useState<string>('');

  const [taskItems, setTaskItems] = React.useState<string[]>([]);

  const handleAddTask = React.useCallback(() => {
    Keyboard.dismiss();
    if (task !== '') {
      setTaskItems(prev => [...prev, task]);
      setTask('');
    }
  }, [task]);

  const completeTask = React.useCallback(
    (index: number) => {
      Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            let itemsCopy = [...taskItems];
            itemsCopy.splice(index, 1);
            setTaskItems(itemsCopy);
          },
        },
      ]);
    },
    [taskItems],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#E8EAED'} />
      <View>
        <Text style={styles.heading}>Today's Task</Text>
      </View>
      <ScrollView>
        {taskItems.length > 0 ? (
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Tasks text={item} />
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black'}}>No task</Text>
          </View>
        )}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTAskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          placeholderTextColor="#C0C0C0"
          onChangeText={text => setTask(text)}
          value={task}
        />
        <Pressable onPress={() => handleAddTask()}>
          <View style={styles.addBtn}>
            <Text style={styles.addBtnIcon}>+</Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 30,
    marginTop: 74,
  },
  writeTAskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 60,
    width: '80%',
    color: 'black',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addBtn: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addBtnIcon: {
    fontSize: 30,
    color: '#C0C0C0',
  },
});

export default App;
