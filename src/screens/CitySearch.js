import React, {Component} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import theme from '../../theme'
import CityListing from "../components/CityListing";

export default class CitySearchScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            cityText: this.props.navigation.getParam('city', ''),
            cities: [],
            citiesMatchingSearch: [],
        };
    }

    componentDidMount() {
        fetch('https://data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=0&facet=origine')
            .then(response => response.json())
            .then((responseJson) => {
                let cityList = new Set();
                responseJson.facet_groups[0].facets.forEach(facet => {
                    cityList.add(facet.name)
                });
                this.setState({
                    cities: Array.from(cityList).sort()
                })
            });
    }

    render() {
        let cities = [];
        let resultsNumber = this.state.citiesMatchingSearch.length;
        for (let i = 0; i < resultsNumber; i++) {
            if (i !== 0) {
                cities.push(<View key={i} style={styles.separator}/>);
            }
            let cityName = this.state.citiesMatchingSearch[i];
            cities.push(<CityListing
                cityName={cityName}
                key={cityName}
                style={styles.cityListing}
                onPress={() => this.handlePressOnCity(cityName)}
            />);
        }

        return (
            <View>
                <View style={styles.inputArea}>
                    <TextInput placeholder="D'où souhaitez-vous partir ?"
                               value={this.state.cityText}
                               onChangeText={cityText => this.input(cityText)}
                               autoFocus={true}
                               style={styles.inputText}
                    />
                </View>
                <ScrollView keyboardShouldPersistTaps={'always'}
                            contentContainerStyle={styles.citiesArea}
                            style={styles.citiesAreaWrapper}>
                    {cities}
                </ScrollView>
            </View>
        );
    }

    input(cityText) {
        const newCitiesMatching = this.state.cities.filter(journey => journey.toLowerCase().startsWith(cityText.toLowerCase()));
        this.setState({
            cityText: cityText,
            citiesMatchingSearch: newCitiesMatching,
        });
    }

    handlePressOnCity(cityName) {
        this.setState({
            cityText: cityName,
            citiesMatchingSearch: [],
        });
        this.props.navigation.navigate('Home', {
            city: cityName
        })
    }
}

const styles = StyleSheet.create({
    inputArea: {
        backgroundColor: 'white',
        height: 80,
        marginBottom: 20,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    inputText: {
        fontSize: 24,
        fontWeight: '600',
        marginHorizontal: 20,
    },
    citiesAreaWrapper: {
        marginBottom: 105,
    },
    citiesArea: {
        marginHorizontal: 30,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    separator: {
        marginBottom: 15,
        width: '100%',
        borderBottomColor: theme.LIGHT_GRAY,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    cityListing: {
        marginBottom: 15,
    }
});


