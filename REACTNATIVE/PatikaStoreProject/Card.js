import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image style={styles.image} source={{ uri: props.img }} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price}</Text>
        <Text style={styles.stock}>
          {props.stock === true ? "" : "Stokta Yok"}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: height / 4,
    width: "100%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  subContainer: {
    padding: 5,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
  price: {
    marginTop: 5,
    color: "#333333",
    fontWeight: "bold",
    fontSize: 17,
  },
  stock: {
    color: "red",
    marginTop: 5,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 17,
  },
});
