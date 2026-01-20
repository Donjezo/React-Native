import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data/cities.json";

class CitiesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    this.setState({ cities: data });
  }

  renderItem = ({ item }) => {
    const { name, countryCode, population, description } = item;

    return (
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Country Code: {countryCode}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.small}>
          Population:{" "}
          {population?.toLocaleString
            ? population.toLocaleString()
            : population}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Cities</Text>

        <FlatList
          data={this.state.cities}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default CitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  cardWrapper: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  description: {
    fontSize: 13,
    marginTop: 6,
    color: "#555",
  },
  small: {
    marginTop: 6,
    fontSize: 12,
    color: "#777",
  },
});
