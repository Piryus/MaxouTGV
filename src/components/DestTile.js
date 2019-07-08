import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import theme from '../../theme';
import Icon from "./Icon";

export default class DestTile extends Component {
    render() {
        return(
            <View style={[styles.tile, this.props.style]}>
                <Text style={styles.trip}>{this.props.origin} -> {this.props.destination}</Text>
                <Text style={styles.duration}><Icon name={'stopwatch'} size={15} /> {this.props.duration}</Text>
                <Text style={styles.hours}><Icon name={'clock'} size={15} /> {this.props.departure} -> 15h08</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tile: {
        padding: 5,
        height: 80,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'white',
        borderColor: theme.LIGHT_GRAY,
    },
    trip: {
        top: 38,
        fontSize: 25,
    },
    duration: {
        position: 'absolute',
        padding: 5,
    },
    hours: {
        position: 'absolute',
        padding: 5,
        alignSelf: 'flex-end',
    }
});
