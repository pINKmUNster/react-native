import React from 'react'
import {  StyleSheet,  View, Text  } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem} >
            <Text>{props.value}</Text>
        </View>
    )
}

export default GoalItem
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})