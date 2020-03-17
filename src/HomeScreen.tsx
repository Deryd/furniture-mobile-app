import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { IHomePage } from '../src/Interfaces'

export const HomeScreen = ({ navigation }) => {
    const furniture = [
        {id: 1, title: "Title 1"},
        {id: 2, title: "Title 2"},
    ];
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View>
            {furniture.map( (item, index) => {
                return (
                    <Button key={index}
                    title={item.title}
                    onPress={() => {
                          navigation.navigate('Details', {itemId: item.id, itemTitle: item.title})
                      }
                  }
                  />
                )
            })}
        </View>
       
      </View>
    )
}