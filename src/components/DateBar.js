import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import theme from '../../theme'
import Icon from "./Icon";

export default class DateBar extends Component {
    render() {
        return(
            <View style={styles.box}>
                <View style={styles.input}>
                    <Icon name={'calendar'} size={25} color={theme.LIGHT_GRAY} style={styles.trainIcon} />
                    <Text style={styles.inputText}>À quelle date ?</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        borderColor: theme.MEDIUM_GRAY,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: 10,
        marginHorizontal: 25,
    },
    trainIcon: {
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputText: {
        color: theme.MEDIUM_GRAY,
    }
});
