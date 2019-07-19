import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text} from "react-native-elements";
import CityTile from "./CityTile";
import theme from '../../theme';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destTiles : new Set(),
        }
    }

    componentWillMount() {
        const city = this.props.city;
        const date = this.props.date;
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=1000&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.records.forEach(item => {
                    this.setState({
                        destTiles: new Set(this.state.destTiles).add(item.fields.destination)
                    });
                });
            });
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        const city = nextProps.city;
        const date = nextProps.date;
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        this.setState({
            destTiles: new Set(),
        });
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=1000&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.records.forEach(item => {
                    this.setState({
                        destTiles: new Set(this.state.destTiles).add(item.fields.destination)
                    });
                });
            });
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                <Text h4 style={styles.recoText}>{this.state.destTiles.size} destinations trouvées</Text>
                {Array.from(this.state.destTiles).map((dest, index) => (
                <CityTile key={dest}
                          destination={dest}
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
