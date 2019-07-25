import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import BackButton from "../components/BackButton";
import theme from '../../theme';

export default class CityScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.header}>
                    <BackButton style={styles.backButton}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        height: 80,
        backgroundColor: theme.PRIMARY_COLOR,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    backButton: {
        marginTop: 20,
        marginLeft: 20,
    }
});