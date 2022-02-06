import React, { useState } from "react";
import { StyleSheet, TextInput, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Input = () => {
  return (
    <View style={styles.inputView}>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    padding: 10,
  },
  inputView: {
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
    height: height * 0.045,
    justifyContent: "center",
    margin: 10,
    marginBottom: 5,
  },
});
