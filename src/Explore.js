import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from "./components/Icon";
import SearchBar from "./components/SearchBar";
import DateBar from "./components/DateBar";

export default class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.layout}>
         <View style={styles.searchBox}>
             <SearchBar />
             <DateBar />
          </View>
          <View style={styles.resultBox}>
            <Text>List goes here</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  layout : {
    flex: 1,
  },
  searchBox : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  resultBox : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  departInput: {
    fontSize: 24,
    margin: 50,
  },
});
