import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const Circlecomponent = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const radius = 150;
  const centerX = 175, centerY = 175;
  const rotation = useRef(new Animated.Value(0)).current;
  const angleRef = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 2 || Math.abs(gesture.dy) > 2,
      onPanResponderMove: (_, gesture) => {
        let newAngle = angleRef.current + gesture.dx / 2;
        rotation.setValue(newAngle);
      },
      onPanResponderRelease: () => {
        angleRef.current = rotation.__getValue(); // Save the last rotation position
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* Outer Circle (Rotating) */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.outerCircle,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [-360, 360],
                  outputRange: ['-360deg', '360deg']
                })
              }
            ]
          }
        ]}
      >
        {numbers.map((num, index) => {
          const angle = (index * (360 / numbers.length)) * (Math.PI / 180);
          const x = centerX + radius * Math.cos(angle) - 10;
          const y = centerY + radius * Math.sin(angle) - 10;

          return (
            <View key={num} style={{ position: 'absolute', left: x, top: y, alignItems: 'center' }}>
              {/* Rotating Number with Dynamic Color Change */}
              <Animated.Text
                style={[
                  styles.circleNumber,
                  {
                    color: rotation.interpolate({
                      inputRange: [
                        (index - 0.5) * (360 / numbers.length),
                        index * (360 / numbers.length),
                        (index + 0.5) * (360 / numbers.length)
                      ],
                      outputRange: ['black', 'red', 'black'],
                      extrapolate: 'clamp'
                    }),
                    transform: [
                      {
                        rotate: rotation.interpolate({
                          inputRange: [-360, 360],
                          outputRange: ['360deg', '-360deg']
                        })
                      }
                    ]
                  }
                ]}
              >
                {num}
              </Animated.Text>
            </View>
          );
        })}
      </Animated.View>

      {/* Inner Circle (Fixed) */}
      <View style={styles.innerCircle} />
      <Text style={styles.hourText}>Hour</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    height: 350,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 175,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  innerCircle: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
    borderRadius: 100,
    position: 'absolute',
  },
  circleNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hourText: {
    fontSize: 20,
    color: 'red',
    position: 'absolute',
    top: '48%', // Center vertically
    transform: [{ translateY: -120 }], // Move it above the inner circle
    right: "45%",
  },
});

export default Circlecomponent;
