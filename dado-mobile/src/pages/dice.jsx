import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const diceImages = {
  1: require('./assets/dice1.png'),
  2: require('./assets/dice2.png'),
  3: require('./assets/dice3.png'),
  4: require('./assets/dice4.png'),
  5: require('./assets/dice5.png'),
  6: require('./assets/dice6.png'),
};

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNum);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <Image source={diceImages[diceNumber]} style={styles.diceImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 150,
    height: 150,
  },
});
