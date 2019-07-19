import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text} from "react-native-elements";
import DestTile from "./DestTile";
import theme from '../../theme';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destTiles : [],
        }
    }

    componentWillMount() {
        const city = this.props.city;
        const date = this.props.date;
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.records.forEach(item => {
                    let dest = {
                        origin: item.fields.origine,
                        recordid: item.recordid,
                        destination: item.fields.destination,
                        duration: '14:03',
                        departure: item.fields.heure_depart
                    };
                    this.setState({
                        destTiles: this.state.destTiles.concat(dest)
                    });
                });
            });
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        const city = nextProps.city;
        const date = nextProps.date;
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        this.setState({
            destTiles: [],
        });
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.records.forEach(item => {
                    let dest = {
                        origin: item.fields.origine,
                        recordid: item.recordid,
                        destination: item.fields.destination,
                        duration: '14:03',
                        departure: item.fields.heure_depart
                    };
                    this.setState({
                        destTiles: this.state.destTiles.concat(dest)
                    });
                });
            });
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                <Text h4 style={styles.recoText}>Trajets disponibles</Text>
                {this.state.destTiles.map((dest, index) => (
                <DestTile origin={dest.origin}
                          key={dest.recordid}
                          destination={dest.destination}
                          duration={dest.duration}
                          departure={dest.departure}
                          style={styles.destTile}/>
                          ))}
            </ScrollView>
        );
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
