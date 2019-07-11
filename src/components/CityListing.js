import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";
import Icon from "./Icon";

export default class CityListing extends Component {
    render() {
        return(
            <View style={[styles.cityListing, this.props.style]}>
                <Icon name={'pin'} size={15} style={styles.cityPin}/>
                <Text style={styles.cityName}>{this.props.cityName}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    cityListing: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cityPin: {
        marginRight: 15,
        color: 'black',
    },
    cityName: {
        fontSize: 17,
        color: 'black',
    },
});
