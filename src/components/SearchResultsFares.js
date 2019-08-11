import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from "react-native-elements";
import DestTile from "./DestTile";
import theme from "../../theme";

export default class SearchResultsFares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fares: new Set(),
        }
    }

    updateDataFromAPI(cityDeparture, cityArrival, date) {
        // Format the date correctly to call the API
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        // Clears the list of destination
        this.setState({
            fares: new Set(),
        });
        // Fetches the data from the SNCF API and updates the current state with the available destinations
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=10&refine.date=' + formattedDate + '&refine.origine=' + cityDeparture + '&refine.destination=' + cityArrival + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.records.forEach(record => {
                    this.setState({
                        fares: new Set(this.state.fares).add(record)
                    });
                });
            });
    }

    componentWillMount(): void {
        const departure = this.props.departure;
        const destination = this.props.destination;
        const date = this.props.date;
        this.updateDataFromAPI(departure, destination, date)
    }

    render() {
        return (
            <View>
                <Text style={styles.countTrainsText}>{this.state.fares.size} trains disponibles</Text>
                <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                    {Array.from(this.state.fares).map((record, index) => (
                        <DestTile key={record.recordid}
                                  origin={record.fields.origine}
                                  destination={record.fields.destination}
                                  departure={record.fields.heure_depart}
                                  arrival={record.fields.heure_arrivee}
                                  style={styles.destTile}/>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 5,
    },
    countTrainsText: {
        textAlign: 'center',
        marginVertical: 10,
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
});
