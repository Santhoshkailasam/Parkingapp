import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useFonts } from 'expo-font';
import Back from '../assets/icon/back.svg';
import Timeline from '../component/Timeline';
import Circletimeline from '../component/circletimeline';
const Bookingscreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Reggae: require('../fonts/ReggaeOne-Regular.ttf'),
    Rakkas: require('../fonts/Rakkas-Regular.ttf'),
  });

  // Loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tech Car Parking</Text>
      </View>

      {/* Subtitle */}
      <View>
        <Text style={styles.subtitleText}>choose Time for Parking</Text>
      </View>

      {/* Horizontal ScrollView for Timeline */}
      <View style={styles.timelineContainer}>
        <Timeline time="1:00 AM" />
        <Timeline time="2:00 AM" />
        <Timeline time="3:00 AM" />
        <Timeline time="4:00 AM" />
        <Timeline time="5:00 AM" />
        <Timeline time="6:00 AM" />
        <Timeline time="7:00 AM" />
        <Timeline time="8:00 AM" />
        <Timeline time="9:00 AM" />
        <Timeline time="10:00 AM" />
        <Timeline time="11:00 AM" />
        <Timeline time="12:00 PM" />
        <Timeline time="1:00 PM" />
        <Timeline time="2:00 PM" />
        <Timeline time="3:00 PM" />
        <Timeline time="4:00 PM" />
        <Timeline time="5:00 PM" />
        <Timeline time="6:00 PM" />
        <Timeline time="7:00 PM" />
        <Timeline time="8:00 PM" />
        <Timeline time="9:00 PM" />
        <Timeline time="10:00 PM" />
        <Timeline time="11:00 PM" />
        <Timeline time="12:00 AM" />
      </View>
      {/* Next Button
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity> */}
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
    fontSize: 30,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  nextButton: {
    backgroundColor: '#EAD4B4AB',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginTop: 30,
  },
  nextButtonText: {
    fontSize: 20,
    fontFamily: 'Reggae',
    color: 'black',
  },
  numbers:{
    alignSelf: 'center',
  }
});

export default Bookingscreen;