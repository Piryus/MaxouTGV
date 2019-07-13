import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import Recommendations from "../components/Recommendations";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import TownScreen from "./Town";

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const city = this.props.navigation.getParam('city', '');
        const date = '';
        return (
            <View style={styles.layout}>
                <View style={styles.searchBox}>
                    <SearchBar message={city}
                               placeholder={"D'où souhaitez-vous partir ?"}
                               iconName={'train'}
                               onPress={() => this.pressCityBar(city)}
                    />
                    <SearchBar message={date}
                               placeholder={"À quelle date ?"}
                               iconName={'calendar'}
                               onPress={() => this.pressDateBar(date)}
                    />
                </View>
                <Recommendations/>
            </View>
        );
    }

    pressCityBar(city) {
        this.props.navigation.navigate('Town', {
            city: city
        })
    }

    pressDateBar(date) {
        
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        marginHorizontal: 10,
    },
    searchBox: {
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
        Home: {
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
