import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import theme from '../../theme';

export default class CityTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity>
                <ImageBackground source={require('../../assets/lyon.jpg')} style={[styles.tile, this.props.style]}>
                    <Text style={styles.trip}>{this.props.destination}</Text>
                </ImageBackground>
            </TouchableOpacity>
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
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    trip: {
        textTransform: 'capitalize',
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
});
