import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../theme';
import Icon from "./Icon";

export default class DestTile extends Component {
    constructor(props) {
        super(props);
        // Computes the duration of the trip
        const departure = this.props.departure.split(':');
        const arrival = this.props.arrival.split(':');
        const tempHourDep = parseInt(departure[0]);
        const tempMinsDep = parseInt(departure[1]);
        const tempHourArr = parseInt(arrival[0]);
        const tempMinsArr = parseInt(arrival[1]);
        const tempDuration = new Date();
        tempDuration.setHours(tempHourArr - tempHourDep);
        tempDuration.setMinutes(tempMinsArr - tempMinsDep);
        this.duration = ('0' + tempDuration.getHours()).slice(-2) + 'h' + ('0' + tempDuration.getMinutes()).slice(-2);
    }


    render() {
        return (
            <View style={[styles.tile, this.props.style]}>
                <Text style={styles.duration}><Icon name={'stopwatch'} size={15}/> {this.duration}</Text>
                <Text style={styles.hours}><Icon name={'clock'} size={15}/> {this.props.departure} - {this.props.arrival}</Text>
                <Text style={styles.trip}>{this.props.origin} <Icon name={'arrow-forward'} size={15}/> {this.props.destination}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tile: {
        padding: 5,
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    trip: {
        padding: 5,
        fontSize: 15,
        color: theme.PRIMARY_TEXT,
        fontWeight: theme.WEIGHT_SEMIBOLD,
        alignSelf: 'flex-end',
        position: 'absolute',
    },
    duration: {
        padding: 5,
        color: theme.MEDIUM_GRAY,
        fontWeight: theme.WEIGHT_SEMIBOLD,
    },
    hours: {
        padding: 5,
        color: theme.MEDIUM_GRAY,
        fontWeight: '900',
        marginLeft: 'auto',
    }
});
