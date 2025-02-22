import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timeline = ({ time, isSelected }) => {
  return (
    <View style={[styles.timelineItem, isSelected && styles.selectedItem]}>
      <Text style={[styles.timelineText, isSelected && styles.selectedText]}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timelineItem: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  timelineText: {
    fontSize: 16,
    color: 'white',
  },
  selectedItem: {
    backgroundColor: 'red',
  },
  selectedText: {
    color: 'black',
  },
});

export default Timeline;