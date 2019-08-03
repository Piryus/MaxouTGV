import React, {Component} from 'react';
import {View} from 'react-native';

export default class SearchResultsFares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fareTiles: [],
        }
    }

    updateDataFromAPI(city, date) {
        // Format the date correctly to call the API
        const formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
        // Clears the list of destination
        this.setState({
            cityTiles: new Set(),
        });
        // Fetches the data from the SNCF API and updates the current state with the available destinations
        fetch('https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=0&facet=destination&refine.date=' + formattedDate + '&refine.origine=' + city + '&refine.od_happy_card=OUI')
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.facet_groups[0].facets.forEach(facet => {
                    this.setState({
                        cityTiles: new Set(this.state.cityTiles).add(facet.name)
                    });
                });
            });
    }
    
    componentDidMount(): void {
        const departure = this.props.departure;
        const destination = this.props.destination;
        const date = this.props.date;
    }

    render() {
        return(
            <View style={styles.layout}>

            </View>
        );
    }
}

const styles = Stylesheet.create({
    layout: {
        marginHorizontal: 20,
    }
});