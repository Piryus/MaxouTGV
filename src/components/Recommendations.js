import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from "react-native-elements";
import DestTile from "./DestTile";

export default class Recommendations extends Component {
    render() {
        return(
            <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                <Text h4>Recommandés</Text>
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} duration={'2h04'} departure={'13h37'} style={styles.destTile} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      zIndex: 999,
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
