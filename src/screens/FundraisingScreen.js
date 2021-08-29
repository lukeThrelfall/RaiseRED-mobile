import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FundraisingScreen = (props) => {
    return (
        <View style={styles.mainView}>
            <Text>Fundraising</Text>
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

export default FundraisingScreen;