import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLOR } from '../theme/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLOR.Black,
  }
});
