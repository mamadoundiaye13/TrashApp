import React, { Component } from 'react';
import { View, Text, ListView, ActivityIndicator } from 'react-native';

export default class ShowTrashListActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    static navigationOptions =
        {
            title: 'ShowTrashListActivity',
        };

    componentDidMount() {
        return fetch('https://react-native-trash.000webhostapp.com/Component/AddTrash.js')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function() {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    GetTrashIDFunction=(trash_id,trash_longitude, trash_latitude, trash_address, trash_code_postal, trash_ville, trash_pays)=>{
        this.props.navigation.navigate('Third', {
            ID : trash_id,
            LONGITUDE : trash_longitude,
            LATITUDE: trash_latitude,
            ADDRESS: trash_address,
            CODEPOSTAL: trash_code_postal,
            VILLE: trash_ville,
            PAYS: trash_pays,
        });
    };
    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.MainContainer_For_Show_TrashList_Activity}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderSeparator= {this.ListViewItemSeparator}
                    renderRow={ (rowData) => <Text style={styles.rowViewContainer}
                                                   onPress={this.GetTrashIDFunction.bind(
                                                       this, rowData.trash_id,
                                                       rowData.trash_longitude,
                                                       rowData.trash_latitude,
                                                       rowData.trash_address,
                                                       rowData.trash_code_postal,
                                                       rowData.trash_ville,
                                                       rowData.trash_pays,
                                                   )} >
                        {rowData.trash_address}
                    </Text> }
                />
            </View>
        );
    }
}
