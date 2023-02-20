import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  text: string;
}

const Tasks = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={styles.circular} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 20,
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: '#F6F6F6',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: 'black',
    fontSize: 16,
    maxWidth: '80%',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tasks;
