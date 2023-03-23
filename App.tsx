import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './component/Home/Home';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    poppins: require('./assets/fonts/Poppins-Regular.ttf')
  })

  if(!loaded) return null
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
