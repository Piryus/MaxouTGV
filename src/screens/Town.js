import React, {Component} from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import theme from '../../theme'
import CityListing from "../components/CityListing";

export default class TownScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            cityText: ''
        };
    }

    render() {
        return (
            <View>
                <View style={styles.inputArea}>
                    <TextInput placeholder="D'où souhaitez-vous partir ?"
                               value={this.state.cityText}
                               onChangeText={(cityText) => this.setState({cityText})}
                               style={styles.inputText}
                    />
                </View>
                <View style={styles.citiesArea}>
                    <CityListing cityName={'Marseille'} />
                    <View style={styles.separator}/>
                    <CityListing cityName={'Lyon'} />
                    <View style={styles.separator}/>
                    <CityListing cityName={'Paris'} />
                    <View style={styles.separator}/>
                    <CityListing cityName={'Tourcoing'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputArea:  {
        backgroundColor: 'white',
        height: 80,
        marginBottom: 20,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    inputText: {
        fontSize: 24,
        fontWeight: '600',
        marginHorizontal: 20,
    },
    citiesArea: {
        flexDirection: 'column',
        marginHorizontal: 30,
    },
    separator: {
        marginVertical: 15,
        width: '100%',
        borderBottomColor: theme.LIGHT_GRAY,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});


