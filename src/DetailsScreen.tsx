import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { IHomePage } from '../src/Interfaces'

export const DetailsScreen = ({ route, navigation }) => {
    const { itemId, itemTitle } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{itemTitle} (id : {JSON.stringify(itemId)})</Text>
        </View>
    )
}