import React from 'react';
import HomeScreen from './Explore';
import AlertsScreen from './Alerts'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from './components/Icon';
import theme from '../theme';

const TabNavigator = createBottomTabNavigator({
    Explorer: HomeScreen,
    Alertes: AlertsScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Explorer') {
                    iconName = 'compass'
                } else if (routeName === 'Alertes') {
                    iconName = 'notifications'
                }
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: theme.PRIMARY_COLOR,
            inactiveTintColor: 'gray',
        },
    });

export default createAppContainer(TabNavigator);

