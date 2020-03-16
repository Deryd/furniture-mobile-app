import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from "./src/NavBar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar title="furniture app"></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
 