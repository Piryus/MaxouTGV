import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
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
                <Text style={styles.hours}>{this.props.departure} <Icon name='arrow-forward' size={20}/> {this.props.arrival}</Text>
                <Text style={styles.duration}><Icon name={'stopwatch'} size={15}/> {this.duration}</Text>
                <Text style={styles.trainId}><Image source={require('../../assets/sncf_logo.png')} /> {this.props.trainId}</Text>
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
        flexDirection: 'column',
    },
    duration: {
        padding: 5,
        color: theme.MEDIUM_GRAY,
        fontWeight: theme.WEIGHT_SEMIBOLD,
    },
    hours: {
        fontSize: 20,
        padding: 5,
        color: 'black',
        fontWeight: '900',
    },
    trainId: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontSize: 12,
    }
});
