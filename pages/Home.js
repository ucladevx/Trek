import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 34.0689,
          longitude: -118.4452,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0321,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Home;
