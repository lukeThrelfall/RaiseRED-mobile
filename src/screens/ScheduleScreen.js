import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const ScheduleScreen = (props) => {
    return (
        <View style={styles.mainView}>
            <Text>Schedule</Text>
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

export default ScheduleScreen;