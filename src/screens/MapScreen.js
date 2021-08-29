import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const MapScreen = (props) => {
    return (
        <View style={styles.mainView}>
            <Text>Map</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default MapScreen;