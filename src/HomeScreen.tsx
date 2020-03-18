import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card } from "./UI/Card";
//import { IHomePage } from '../src/Interfaces'

export const HomeScreen = ({ navigation }) => {
    const furniture = [
        { id: 1, title: "Title 1" },
        { id: 2, title: "Title 2" },
        { id: 3, title: "Title 3" },
        { id: 4, title: "Title 4" },
    ];
    return (
        <View style={styles.list}>
            <Text style={styles.header}>Furniture list</Text>
            <View>
                {furniture.map((item) => {
                    return (
                        <Card style={styles.card}> 
                            <Button key={item.id}
                                title={item.title}
                                onPress={() => {
                                    navigation.navigate('Details', { itemId: item.id, itemTitle: item.title })
                                }
                                }
                            />
                        </Card>
                    )
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    list: { 
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    card: {
        marginBottom: 6
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 18,
        alignSelf: 'center'
    }
});