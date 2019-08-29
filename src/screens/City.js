import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../../theme';
import Icon from "../components/Icon";
import SearchResultsFares from "../components/SearchResultsFares";
import {withNavigation} from 'react-navigation';

class CityScreen extends Component {
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
                <Text style={headerStyles.headerTitleTripText} numberOfLines={1}>{departure} <Icon name='arrow-forward' size={15}/> {destination}</Text>
                <Text style={headerStyles.headerDate}>{this.formatDate(date)}</Text>
            </View>;
        return ({
            headerTitle: title,
            headerStyle: {
                backgroundColor: theme.PRIMARY_COLOR,
            },
            headerTintColor: '#fff'
        });
    };

    constructor(props) {
        super(props);
    }

    render() {
        const departure = this.props.navigation.getParam('departure', '???');
        const destination = this.props.navigation.getParam('destination', '???');
        const date = this.props.navigation.getParam('date');
        return (

            <SearchResultsFares departure={departure} destination={destination} date={date} />
        );
    }

    static formatDate(date) {
        if (date === '') {
            return ''
        }

        let formattedDate;
        switch (date.getDay()) {
            case 0:
                formattedDate = 'Dimanche ';
                break;
            case 1:
                formattedDate = 'Lundi ';
                break;
            case 2:
                formattedDate = 'Mardi ';
                break;
            case 3:
                formattedDate = 'Mercredi ';
                break;
            case 4:
                formattedDate = 'Jeudi ';
                break;
            case 5:
                formattedDate = 'Vendredi ';
                break;
            case 6:
                formattedDate = 'Samedi ';
                break;

        }
        formattedDate += date.getDate();
        formattedDate += ' ';
        switch (date.getMonth()) {
            case 0:
                formattedDate += 'janvier';
                break;
            case 1:
                formattedDate += 'février';
                break;
            case 2:
                formattedDate += 'mars';
                break;
            case 3:
                formattedDate += 'avril';
                break;
            case 4:
                formattedDate += 'mai';
                break;
            case 5:
                formattedDate += 'juin';
                break;
            case 6:
                formattedDate += 'juillet';
                break;
            case 7:
                formattedDate += 'août';
                break;
            case 8:
                formattedDate += 'septembre';
                break;
            case 9:
                formattedDate += 'octobre';
                break;
            case 10:
                formattedDate += 'novembre';
                break;
            case 11:
                formattedDate += 'décembre';
                break;
        }
        return formattedDate
    }
}

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});

export default withNavigation(CityScreen);
