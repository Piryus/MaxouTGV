import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme'
import Icon from "./Icon";

export default class SearchBar extends Component {
    render() {
        const iconName = this.props.iconName;
        const pressFunction = this.props.onPress;
        let city = this.props.message;
        let textStyle = styles.inputText;
        if (city === '') {
            city = this.props.placeholder;
            textStyle = styles.inputTextPlaceholder;
        }
        return(
            <TouchableOpacity onPress={pressFunction} style={styles.box}>
                <Icon name={iconName} size={25} color={theme.LIGHT_GRAY} style={styles.icon} />
                <Text style={textStyle}>{city}</Text>
            </TouchableOpacity>
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
        marginTop: 20,
        marginHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    inputTextPlaceholder: {
        color: theme.MEDIUM_GRAY,
    },
    inputText: {
        color: 'black',
    }
});
