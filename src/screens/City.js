import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../../theme';
import Icon from "../components/Icon";

export default class CityScreen extends Component {
    static navigationOptions = ({navigation}) => {
        const departure = navigation.getParam('departure', '???');
        const destination = navigation.getParam('destination', '???');
        const date = navigation.getParam('date', '???');
        const headerStyles = StyleSheet.create({
            headerTitleLayout: {
                flexDirection: 'column',
            },
            headerTitleTripText: {
                color: 'white',
                fontSize: 15,
                fontWeight: '700',
            },
            headerDate: {
                color: theme.LIGHT_GRAY,
            }
        });
        const title =
            <View style={headerStyles.headerTitleLayout}>
                <Text style={headerStyles.headerTitleTripText}>{departure} <Icon name='arrow-forward' size={15}/> {destination}</Text>
                <Text style={headerStyles.headerDate}>{date.toString()}</Text>
            </View>;
        return ({
            headerTitle: title,
            headerStyle: {
                backgroundColor: theme.PRIMARY_COLOR,
            }
        });
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>

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
});