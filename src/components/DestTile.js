import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
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
            <ImageBackground source={require('../../assets/lyon.jpg')} style={[styles.tile, this.props.style]}>
                <Text style={styles.trip}>{this.props.origin} → {this.props.destination}</Text>
                <Text style={styles.duration}><Icon name={'stopwatch'} size={15}/> {this.duration}</Text>
                <Text style={styles.hours}><Icon name={'clock'} size={15}/> {this.props.departure} - {this.props.arrival}</Text>
            </ImageBackground>
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
        fontSize: 15,
        color: 'white',
        fontWeight: '600',
    },
    duration: {
        position: 'absolute',
        padding: 5,
        color: 'white',
        fontWeight: '600',
    },
    hours: {
        position: 'absolute',
        padding: 5,
        alignSelf: 'flex-end',
        color: 'white',
        fontWeight: '900',
    }
});
