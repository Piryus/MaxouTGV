import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator} from 'react-native';
import {Text} from "react-native-elements";
import CityTile from "./CityTile";
import theme from '../../theme';
import {withNavigation} from 'react-navigation';

class SearchResultsCities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            cityTiles: new Set(),
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
            cityTiles: new Set(),
            loading: true,
        });
        // Fetches the data from the SNCF API and updates the current state with the available destinations
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=0&facet=destination&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.facet_groups[0].facets.forEach(facet => {
                    this.setState({
                        cityTiles: new Set(this.state.cityTiles).add(facet.name)
                    });
                });
            })
            .then(() => this.setState({
                loading: false
            }));
    }

    render() {
        let content;
        if (!this.state.loading) {
            content =
                <View style={styles.resultBox}>
                    <Text style={styles.countCityText}>{this.state.cityTiles.size} destinations trouvées</Text>
                    <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                        {Array.from(this.state.cityTiles).sort().map((dest, index) => (
                            <CityTile key={dest}
                                      destination={dest}
                                      onPress={() => this.onCityTiledPress(dest)}
                                      style={styles.destTile}/>
                        ))}
                    </ScrollView>
                </View>;
        } else {
            content = <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={theme.PRIMARY_COLOR}/>
                <Text style={styles.loadingText}>Chargement des destinations...</Text>
            </View>;
        }

        return content;
    }

    onCityTiledPress(destination) {
        this.props.navigation.navigate('City', {
            destination: destination,
            departure: this.props.city,
            date: this.props.date
        })
    }
}

const styles = StyleSheet.create({
    resultBox: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    wrapper: {
        paddingBottom: 5,
        backgroundColor: theme.BACKGROUND_COLOR,
    },
    countCityText: {
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 15,
        color: theme.MEDIUM_GRAY,
        fontWeight: theme.WEIGHT_SEMIBOLD,
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
    loadingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    loadingText: {
        fontSize: 20,
        marginTop: 10,
    }
});

export default withNavigation(SearchResultsCities);
