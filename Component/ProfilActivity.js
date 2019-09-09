import {Button, Text, View} from "react-native";
import HomeScreen from "./HomeScreen";
import React, { Component } from 'react';

export default class ProfileActivity extends Component
{
    constructor (props) {
        super(props);
    }
    // Setting up profile activity title.
    static navigationOptions =
        {
            title: 'ProfileActivity',

        };
    render()
    {
        const {goBack} = this.props.navigation;
        return(
            <View style = { styles.MainContainer }>
                <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
                <Button title="Click here to Logout" onPress={ () => goBack(HomeScreen) } />
            </View>
        );
    }
}
