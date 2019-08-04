import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from "react-native-elements";
import DestTile from "./DestTile";
import theme from '../../theme';

export default class Recommendations extends Component {
    render() {
        return(
            <ScrollView contentContainerStyle={styles.destContainer} style={styles.wrapper}>
                <Text h4 style={styles.recoText} >Recommandés</Text>
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:59'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
                <DestTile origin={'Paris'} destination={'Lyon'} arrival={'2:04'} departure={'13:37'} style={styles.destTile} />
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
