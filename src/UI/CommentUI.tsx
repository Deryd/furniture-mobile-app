import React from 'react';
import { StyleSheet, View } from 'react-native';

export const CommentUI = props => {
    return (
        <View style={ {...style.default, ...props.style}}>{props.children}</View>
    )
}

const style = StyleSheet.create({
    default: {
        padding: 20,
        marginHorizontal: 4,
        shadowRadius: 2,
        shadowOpacity: 0.3,
        textShadowOffset: { height: 2, width: 2},
        elevation: 8,
        backgroundColor: 'darkgrey',
        marginBottom: 6
    }
})