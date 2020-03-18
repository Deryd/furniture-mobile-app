import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Comment } from "../src/Comment";
import { AddComment } from "../src/AddComment";
import { ScrollView } from 'react-native-gesture-handler';
import { CommentUI } from './UI/CommentUI';

export const CommentList = props => {
    const [comments, setComment] = useState([]);
    const onAddComment = (comment) => {
        //console.log(comment);

        // const newComment = {
        //     id: Date.now().toString(),
        //     comment: comment
        // }

        setComment(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                comment
            }
        ])
    }

    return (
        <View style={styles.default}>
            <AddComment onAddComment={onAddComment}></AddComment>
            <ScrollView style={styles.scroll}>
                {comments.map(item => {
                    return (
                        <CommentUI>
                            <Comment key={item.id} comment={item.comment}></Comment>
                        </CommentUI>
                    )
                })
                }
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    default: {},
    scroll: {
        height: 200,
        marginTop: 10
    } 
})