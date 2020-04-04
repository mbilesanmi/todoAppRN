import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodoItem({ submitHandler }) {
    const [text, setText] = useState();

    const changeHandler = (value) => {
        setText(value);
    };

    return (
        <View>
            <TextInput
                placeholder="new todo..."
                style={styles.input}
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={() => submitHandler(text)} title="Save todo" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
