import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import theme from '../../theme';

export default class CityTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/lyon.jpg')} style={[styles.tile, this.props.style]}>
                <Text style={styles.trip}>{this.props.destination}</Text>
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
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
});
