import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native"; // Import StyleSheet

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{isToggled ? 'Toggled On' : 'Toggled Off'}</Text>
      <Button title="Toggle" onPress={() => setToggled(!isToggled)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ToggleButton;
