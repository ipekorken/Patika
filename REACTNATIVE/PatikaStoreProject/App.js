import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Card from "./src/components/Card";
import store_data from "./data/store_data.json";
import Input from "./src/components/Input";

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>PATIKASTORE</Text>
      <Input />
      <FlatList
        numColumns={2}
        data={store_data}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            title={item.title}
            img={item.imgURL}
            price={item.price}
            stock={item.inStock}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: "purple",
    fontWeight: "bold",
  },
});
