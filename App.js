import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import React from "react";
import InsertTrash from "./Component/InsertTrash";
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from "./Component/IconWithVadge";
import LoginActivity from "./Component/LoginActivity";
import RegisterActivity from "./Component/RegisterActivity";
import HomeScreen from "./Component/HomeScreen";


// Pour le button qui est à gauche on recupere que la map
const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen
});

// Pour le button qui est à droite on fait le reste
const SPlusStack = createStackNavigator({
    InsertTrash: InsertTrash,
});

const HomeIconWithBadge = (props) => {
    // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3} />;
};

// Le footer
export default createAppContainer(createBottomTabNavigator(
    {
        Home: HomeStack,
        Register: RegisterActivity,
        Login: LoginActivity,
        Plus: InsertTrash,
    },
    {
      /* Other configuration remains unchanged */
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Plus') {
                    iconName = `ios-menu`;
                }else if (routeName === 'Login' || routeName === 'Register') {
                    iconName = `ios-log-in`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#162056',
            inactiveBackgroundColor: '#162056',
        },
    }
));


