import React, {Component} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import SearchBar from "../components/SearchBar";
import DateBar from "../components/DateBar";
import Recommendations from "../components/Recommendations";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TownScreen from "./Town";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

  render() {
        const city = this.props.navigation.getParam('city', '');
    return (
        <View style={styles.layout}>
         <View style={styles.searchBox}>
             <SearchBar value={city}
                        onPress={() => this.props.navigation.navigate('Town',{
                            city: city
                        })}
             />
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

const ExploreNavigator = createStackNavigator({
    Home : {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
        Town: {
        screen: TownScreen,
        },
    },
    {
        initialRouteName: "Home",
    }
);

export default createAppContainer(ExploreNavigator);
