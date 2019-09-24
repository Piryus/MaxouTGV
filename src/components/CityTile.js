import React, {Component} from 'react';
import {StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import theme from '../../theme';

export default class CityTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgPath;
        switch(this.props.destination) {
            case 'LYON (gares intramuros)':
            case 'LYON ST EXUPERY':
                imgPath = require('../../assets/cities/lyon.jpg');
                break;
            case 'ALBI MADELEINE':
            case 'ALBI VILLE':
                imgPath = require('../../assets/cities/albi.jpg');
                break;
            case 'ANDORRE':
                imgPath = require('../../assets/cities/andorre.jpg');
                break;
            case 'ANNECY':
                imgPath = require('../../assets/cities/annecy.jpg');
                break;
            case 'AVIGNON CENTRE':
                imgPath = require('../../assets/cities/avignon.jpg');
                break;
            case 'AIX EN PROVENCE TGV':
                imgPath = require('../../assets/cities/aix.jpg');
                break;
            case 'GRENOBLE':
                imgPath = require('../../assets/cities/grenoble.jpg');
                break;
            case 'FUTUROSCOPE':
                imgPath = require('../../assets/cities/futuroscope.jpg');
                break;
            default:
                imgPath = require('../../assets/cities/placeholder.png');
        }

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <ImageBackground source={imgPath} style={[styles.tile, this.props.style]}>
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
