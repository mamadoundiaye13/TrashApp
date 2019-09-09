/**
 * On met la doc ici
 */
import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native';

export default class HomeScreen extends Component<Props> {
    render() {
        return (
            <MapView
                followsUserLocation={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                toolbarEnabled={true}
                zoomEnabled={true}
                rotateEnabled={true}
                style={{flex: 1}}
                region={{
                    latitude: 48.7266607,
                    longitude: 2.2767442,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                initialRegion={{
                    latitude: 48.7266607,
                    longitude: 2.2767442,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={{latitude: 48.7266607,
                        longitude: 2.2767442}}
                    title={"Adresse à recupérer dans la base de données"}
                    description={"description de l'adress"}
                />
            </MapView>
        );
    }};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
});