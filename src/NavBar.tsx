import React from "react";
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string
}

export const NavBar = (props: Props) => {
    return (
        <View style={styles.nav}>
            <Text style={styles.navText}> {props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    navText: {
        color: 'white',
        fontSize: 20
    }
})