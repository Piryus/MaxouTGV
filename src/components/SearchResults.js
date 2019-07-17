import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from "react-native-elements";
import DestTile from "./DestTile";
import theme from '../../theme';

export default class SearchResults extends Component {
    render() {
        const destTiles = this.fetchDestTiles();
        return(
            <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                <Text h4 style={styles.recoText} >Trajets disponibles</Text>
                <DestTile origin={'Paris'} destination={'Bordeaux'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
            </ScrollView>
        );
    }

    fetchDestTiles() {
        const city = this.props.city;
        const date = this.props.date;
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
