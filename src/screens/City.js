import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../theme';

export default class CityScreen extends Component {
    static navigationOptions = ({navigation}) => {
      return ({
          title: navigation.getParam('city', '???')
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