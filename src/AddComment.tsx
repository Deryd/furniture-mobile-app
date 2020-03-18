import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, KeyboardAvoidingView } from 'react-native';

export const AddComment = ({ onAddComment }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        onAddComment(value)
        setValue('')
    }

    return (
        <View>
            <Text>{value}</Text>
            <TextInput
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Enter text here" />
            <Button title="Add" onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    
})