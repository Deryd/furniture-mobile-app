import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Comment = ({ comment }) => {    
    return (
        <Text style={styles.comment}>{comment}</Text>
    )
}

const styles = StyleSheet.create({
    comment: {
        color: 'white'
    }
})