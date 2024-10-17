import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR } from '../theme/theme';

const HomeScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
       onPress={()=>{
          navigation.push('MovieDetails');
      }}>
<Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:COLOR.Black,
  }
});
