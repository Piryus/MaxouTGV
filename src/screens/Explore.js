import React, {Component} from 'react';
import {View, StyleSheet, Platform, DatePickerAndroid, Image, Text} from 'react-native';
import SearchBar from "../components/SearchBar";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CitySearchScreen from "./CitySearch";
import DateScreen from './Date';
import SearchResults from '../components/SearchResultsCities';
import CityScreen from './City';
import theme from '../../theme';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        }
    }

    render() {
        const city = this.props.navigation.getParam('city', '');
        const selectedDate = this.getFormattedDate();

        let content;
        if (city !== '' && selectedDate !== '') {
            content = <SearchResults city={city} date={this.state.date}/>;
        }

        return (
            <View style={styles.layout}>
                <View style={styles.logoBox}>
                    <Image
                        style={styles.logo}
                        resizeMode='contain'
                        source={require('../../assets/logo/logo.png')}
                    />
                    <Text style={styles.logoText}>MaxouTGV</Text>
                </View>
                <View style={styles.searchBox}>
                    <SearchBar message={city}
                               placeholder={"D'où souhaitez-vous partir ?"}
                               iconName={'train'}
                               onPress={() => this.pressCityBar(city)}
                    />
                    <SearchBar message={selectedDate}
                               placeholder={"À quelle date ?"}
                               iconName={'calendar'}
                               onPress={() => this.pressDateBar()}
                    />
                </View>
                {content}
            </View>
        );
    }

    getFormattedDate() {
        const selectedDate = this.state.date;
        if (selectedDate === '') {
            return ''
        }

        let date;
        switch (selectedDate.getDay()) {
            case 0:
                date = 'Dim. ';
                break;
            case 1:
                date = 'Lun. ';
                break;
            case 2:
                date = 'Mar. ';
                break;
            case 3:
                date = 'Mer. ';
                break;
            case 4:
                date = 'Jeu. ';
                break;
            case 5:
                date = 'Ven. ';
                break;
            case 6:
                date = 'Sam. ';
                break;

        }
        date += selectedDate.getDate();
        date += ' ';
        switch (selectedDate.getMonth()) {
            case 0:
                date += 'Janvier';
                break;
            case 1:
                date += 'Février';
                break;
            case 2:
                date += 'Mars';
                break;
            case 3:
                date += 'Avril';
                break;
            case 4:
                date += 'Mai';
                break;
            case 5:
                date += 'Juin';
                break;
            case 6:
                date += 'Juillet';
                break;
            case 7:
                date += 'Août';
                break;
            case 8:
                date += 'Septembre';
                break;
            case 9:
                date += 'Octobre';
                break;
            case 10:
                date += 'Novembre';
                break;
            case 11:
                date += 'Décembre';
                break;
        }
        return date
    }

    pressCityBar(city) {
        this.props.navigation.navigate('CitySearch', {
            city: city
        })
    }

    pressDateBar() {
        if (Platform.OS === 'iOS') {
            this.selectDateIos()
        } else {
            this.selectDateAndroid()
        }
    }

    async selectDateAndroid() {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date(),
                minDate: new Date(),
                maxDate: new Date().setDate(new Date().getDate() + 30),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    date: new Date(year, month, day)
                });
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: theme.PRIMARY_COLOR,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logoBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 10,
        marginLeft: 10,
    },
    logo: {
        width: 40,
        height: 49,
    },
    logoText: {
        fontFamily: "Roboto",
        marginLeft: 10,
        fontSize: 30,
        color: 'white',
    },
    searchBox: {
        paddingBottom: 30,
        paddingHorizontal: 10,

    },
    departInput: {
        fontSize: 24,
        margin: 50,
    },
});

const ExploreNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        CitySearch: {
            screen: CitySearchScreen,
        },
        Date: {
            screen: DateScreen,
        },
        City: {
            screen: CityScreen,
        }
    },
    {
        initialRouteName: "Home",
    }
);

export default createAppContainer(ExploreNavigator);
