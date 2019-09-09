import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, { Component } from 'react';

export default class EditTrashRecordActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TextInput_Trash_ID: '',
            TextInput_Trash_Longitude: '',
            TextInput_Trash_Latitude: '',
            TextInput_Trash_Address: '',
            TextInput_Trash_CodePostal: '',
            TextInput_Trash_Ville: '',
            TextInput_Trash_Pays: '',
        }
    }
    componentDidMount(){
        // Received trash Details Sent From Previous Activity and Set Into State.
        this.setState({
            TextInput_Trash_ID : this.props.navigation.state.params.ID,
            TextInput_Trash_Longitude: this.props.navigation.state.params.LONGITUDE,
            TextInput_Trash_Latitude: this.props.navigation.state.params.LATITUDE,
            TextInput_Trash_Address: this.props.navigation.state.params.ADDRESS,
            TextInput_Trash_Code_Postal: this.props.navigation.state.params.CODEPOSTAL,
            TextInput_Trash_Ville: this.props.navigation.state.params.VILLE,
            TextInput_Trash_Pays: this.props.navigation.state.params.PAYS,
        })
    }
    static navigationOptions =
        {
            title: 'EditTrashRecordActivity',
        };
    UpdateTrashRecord = () =>{
        fetch('https://react-native-trash.000webhostapp.com/Component/AddTrash.js', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                trash_id : this.state.TextInput_Trash_ID,
                trash_longitude : this.state.TextInput_Trash_Longitude,
                trash_latitude : this.state.TextInput_Trash_Latitude,
                trash_address : this.state.TextInput_Trash_Address,
                trash_code_postal : this.state.TextInput_Trash_CodePostal,
                trash_ville : this.state.TextInput_Trash_Ville,
                trash_pays : this.state.TextInput_Trash_Pays,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server updating records.
                Alert.alert(responseJson);
            }).catch((error) => {
            console.error(error);
        });
    };

    DeleteTrashRecord = () =>{
        fetch('https://react-native-trash.000webhostapp.com/Component/AddTrash.js', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                trash_id : this.state.TextInput_Trash_ID
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);
            }).catch((error) => {
            console.error(error);
        });
        this.props.navigation.navigate('First');
    };
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Trash Record Form </Text>
                <TextInput
                    placeholder="Longitude  Show Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Trash_Longitude : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Latitude  Show Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Trash_Latitude : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Address  Show Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Trash_Address : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Code Postal  Show Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Trash_CodePostal : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Ville  Show Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Trash_Ville : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TextInput
                    placeholder="Pays Show Here"
                    onChangeText={ TextInputValue => this.setState({ TextInput_Trash_Pays : TextInputValue }) }
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />
                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateTrashRecord} >
                    <Text style={styles.TextStyle}> UPDATE TRASH RECORD </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteTrashRecord} >
                    <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
                </TouchableOpacity>
            </View>

        );
    }

}