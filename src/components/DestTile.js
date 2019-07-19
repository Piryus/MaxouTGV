import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import theme from '../../theme';
import Icon from "./Icon";

export default class DestTile extends Component {
    constructor(props) {
        super(props);
        // Compute arrival time
        const departure = this.props.departure.split(':');
        let tempHour = parseInt(departure[0]);
        let tempMins = parseInt(departure[1]);
        let tempDate = new Date();
        tempDate.setHours(tempHour, tempMins);
        const tempDuration = this.props.duration.split(':');
        tempHour = parseInt(tempDuration[0]);
        tempMins = parseInt(tempDuration[1]);
        tempDate.setHours(tempDate.getHours() + tempHour);
        tempDate.setMinutes(tempDate.getMinutes() + tempMins);
        this.arrival = ('0' + tempDate.getHours()).slice(-2) + ':' + ('0' + tempDate.getMinutes()).slice(-2);
    }


    render() {
        return (
            <ImageBackground source={require('../../assets/lyon.jpg')} style={[styles.tile, this.props.style]}>
                <Text style={styles.trip}>{this.props.origin} → {this.props.destination}</Text>
                <Text style={styles.duration}><Icon name={'stopwatch'} size={15}/> {this.props.duration}</Text>
                <Text style={styles.hours}><Icon name={'clock'} size={15}/> {this.props.departure} - {this.arrival}</Text>
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
