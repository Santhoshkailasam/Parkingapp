import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import Back from '../assets/icon/back.svg';
const timeSlots = [
  "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM",
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
  "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM", "12:00 AM"
];
const LOOP_COUNT = 1000;
const infiniteTimeSlots = Array(LOOP_COUNT).fill(timeSlots).flat();
const ITEM_WIDTH = 100;

const Bookingscreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Reggae: require('../fonts/ReggaeOne-Regular.ttf'),
    Rakkas: require('../fonts/Rakkas-Regular.ttf'),
  });

  const flatListRef = useRef(null);
  const middleIndex = Math.floor(infiniteTimeSlots.length / 2);
  const [selectedIndex, setSelectedIndex] = useState(middleIndex);

  useEffect(() => {
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: middleIndex, animated: false });
      }
    }, 100);
  }, []);

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollX / ITEM_WIDTH);

    if (newIndex !== selectedIndex) {
      setSelectedIndex(newIndex);
    }

    if (newIndex <= middleIndex - (timeSlots.length * 2)) {
      flatListRef.current.scrollToIndex({ index: middleIndex, animated: false });
    } else if (newIndex >= middleIndex + (timeSlots.length * 2)) {
      flatListRef.current.scrollToIndex({ index: middleIndex, animated: false });
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tech Car Parking</Text>
      </View>

      <Text style={styles.subtitleText}>Choose Time for Parking</Text>
      
      <View style={styles.redIndicator}></View>
      
      <FlatList
        ref={flatListRef}
        data={infiniteTimeSlots}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timelineContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <Timeline time={item} isSelected={index === selectedIndex} />
        )}
        getItemLayout={(data, index) => ({ length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index })}
        initialScrollIndex={middleIndex}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    backgroundColor: '#EAD4B4AB',
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Reggae',
    marginLeft: 20,
  },
  subtitleText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Rakkas',
    textAlign: 'center',
    marginTop: 20,
  },
  timelineContainer: {
    paddingHorizontal: 10,
  },
  redIndicator: {
    marginTop: 30,
    width: 20,
    height: 20,
    backgroundColor: "red",
    alignSelf:"center"
  }
});
export default Bookingscreen;
