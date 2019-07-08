import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from "./components/SearchBar";
import DateBar from "./components/DateBar";
import { Divider, Text} from "react-native-elements";
import Recommendations from "./components/Recommendations";

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.layout}>
         <View style={styles.searchBox}>
             <SearchBar />
             <DateBar />
          </View>
          <Recommendations />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  layout : {
    flex: 1,
      marginHorizontal: 10,
  },
  searchBox : {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
      marginBottom: 15,
  },
  departInput: {
    fontSize: 24,
    margin: 50,
  },
});
