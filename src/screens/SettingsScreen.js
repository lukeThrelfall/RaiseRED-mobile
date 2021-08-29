import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = (props) => {
    return (
        <View style={styles.mainView}>
            <Text>Settings</Text>
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

export default SettingsScreen;