import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Pressable, } from 'react-native';

const diceImages = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const roll = () => {
    const randomNum = Math.floor(Math.random() * 6);
    setDiceNumber(randomNum);
  };

  const screenWidth = Dimensions.get('window').width;
  const diceFontSize = screenWidth * 0.4; // 40% del ancho
  const textFontSize = screenWidth * 0.1; // 10% del ancho

  return (

    <Pressable style={styles.container} onPress={roll}>
      <Text style={[styles.text, { fontSize: textFontSize }]}>
        ¡Toca el dado!
      </Text>
      <Text style={[styles.diceImage, { fontSize: diceFontSize }]}>
        {diceImages[diceNumber]}
      </Text>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    color: '#000',
  },
  text: {
    marginTop: 30,
    color: '#555',
  },
});

