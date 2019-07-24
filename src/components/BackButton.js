import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from "./Icon";

class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} {...this.props}>
                <Icon name={'arrow-back'} size={25} />
            </TouchableOpacity>
        );
    }
}

export default withNavigation(BackButton);