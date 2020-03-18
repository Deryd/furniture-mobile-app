import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CommentList } from '../src/CommentList'

export const DetailsScreen = ({ route, navigation }) => {
    const { itemId, itemTitle } = route.params;
    return (
        <View style={styles.default}>
            <Text>{itemTitle} (id : {JSON.stringify(itemId)})</Text>
            <CommentList></CommentList>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
    }

})