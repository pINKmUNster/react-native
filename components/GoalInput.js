import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native';


const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (e) => {
        setEnteredGoal(e);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={props.placeholder} value={enteredGoal} onChangeText={goalInputHandler} style={styles.input} />
            <Button title="Add" onPress={() => props.onAddClick(enteredGoal)} />
        </View>
    )
}

export default GoalInput
const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})