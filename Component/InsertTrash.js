import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';

export default class MainProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TrashLongitude: '',
            TrashLatitude: '',
            TrashAddress: ''
        }
    }
    TrashRegistrationFunction = () =>{
        const { TrashLongitude }  = this.state ;
        const { TrashLatitude }  = this.state ;
        const { TrashAddress }  = this.state ;
        fetch('https://react-native-trash-apae.000webhostapp.com/Entity/InsertTrashData.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                longitude: TrashLongitude,
                latitude: TrashLatitude,
                address: TrashAddress
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);
            }).catch((error) => {
            console.error(error);
        });
    };
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Trash Registration Form</Text>
                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter Trash Longitude"
                    onChangeText={TrashLongitude => this.setState({TrashLongitude})}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter Trash Latitude"
                    onChangeText={TrashLatitude => this.setState({TrashLatitude})}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    // Adding hint in Text Input using Place holder.
                    placeholder="Enter Trash Address"
                    onChangeText={TrashAddress => this.setState({TrashAddress})}
                    // Making the Under line Transparent.
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <Button title="Click Here To Add Trash" onPress={this.TrashRegistrationFunction} color="#2196F3" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer :{
        justifyContent: 'center',
        flex:1,
        margin: 10
    },
    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        // Set border Hex Color Code Here.
        borderColor: '#2196F3',
        // Set border Radius.
        borderRadius: 5 ,
        // Set border Radius.
        //borderRadius: 10 ,
    }
});
AppRegistry.registerComponent('MainProject', () => MainProject);
