import React, {Component} from 'react';
import {Text, Button, TextInput} from 'react-native';

export default class TownScreen extends Component<Props> {
    constructor(props) {
        super(props);
    }

    state = {
        text: 'D\'où souhaitez-vous partir ?'
    };

    static navigationOptions =  {
        headerTitle: (
        <TextInput/>
        ),
    };

    render() {
        return (
            <Text>Page de sélection de la ville de départ</Text>
        );
    }
}


