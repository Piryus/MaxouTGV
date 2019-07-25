import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text} from "react-native-elements";
import CityTile from "./CityTile";
import theme from '../../theme';
import {withNavigation} from 'react-navigation';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destTiles : new Set(),
        }
    }

    componentWillMount() {
        const city = this.props.city;
        const date = this.props.date;
        this.updateDataFromAPI(city, date);
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        const city = nextProps.city;
        const date = nextProps.date;
        this.updateDataFromAPI(city, date);
    }

    updateDataFromAPI(city, date) {
        // Format the date correctly to call the API
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        // Clears the list of destination
        this.setState({
            destTiles: new Set(),
        });
        // Fetches the data from the SNCF API and updates the current state with the available destinations
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=0&facet=destination&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.facet_groups[0].facets.forEach(facet => {
                    this.setState({
                        destTiles: new Set(this.state.destTiles).add(facet.name)
                    });
                });
            });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                <Text h4 style={styles.recoText}>{this.state.destTiles.size} destinations trouvées</Text>
                {Array.from(this.state.destTiles).sort().map((dest, index) => (
                <CityTile key={dest}
                          destination={dest}
                          onPress={() => this.onCityTiledPress(dest)}
                          style={styles.destTile}/>
                          ))}
            </ScrollView>
        );
    }

    onCityTiledPress(destination) {
        this.props.navigation.navigate('City', {
            city: destination
        })
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 5,
    },
    recoText: {
        color: theme.PRIMARY_COLOR,
    },
    destContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginHorizontal: 10,
    },
    destTile: {
        marginTop: 10,
    },
});

export default withNavigation(SearchResults);