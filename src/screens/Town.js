import React, {Component} from 'react';
import { TextInput, StyleSheet, View, ScrollView } from 'react-native';
import theme from '../../theme'
import CityListing from "../components/CityListing";

export default class TownScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            cityText: '',
            citiesMatchingSearch: [],
        };
    }

    render() {
        let cities = [];
        let resultsNumber = this.state.citiesMatchingSearch.length;
        if (resultsNumber > 15)
            resultsNumber = 15;
        for (let i = 0; i < resultsNumber; i++) {
            if (i !== 0) {
                cities.push(<View style={styles.separator} />);
            }
            cities.push(<CityListing cityName={this.state.citiesMatchingSearch[i].fields.intitule_gare} style={styles.cityListing} />);
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
                <ScrollView contentContainerStyle={styles.citiesArea} style={styles.citiesAreaWrapper}>
                    {cities}
                </ScrollView>
            </View>
        );
    }

    input(cityText) {
        let newCitiesMatching = data.filter(gare => gare.fields.intitule_gare.toLowerCase().startsWith(cityText.toLowerCase()));
        this.setState({
            cityText: cityText,
            citiesMatchingSearch: newCitiesMatching,
        });
    }
}

const data = require('../../assets/data/referentiel-gares-voyageurs.json');

const styles = StyleSheet.create({
    inputArea:  {
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


