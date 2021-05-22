import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { convertDate } from '../utils';

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 50,
        flex: 0.25,
        alignSelf: 'center',
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 5,
        backgroundColor: 'white'
    },
    articleDetails: {
        flex: 1,
        marginRight: 5
    },
    metadataContainer: {
        flexDirection: 'row',

    },
    metadata: {
        color: '#586069'
    },
    title: {
        fontSize: 16,
        color: '#24292e',
        fontWeight: '700',
    }
});


const Article = ({ article }) => {
    const articleDate = convertDate(article.publishedAt);

    return (
        <View style={styles.container}>
            <View style={styles.articleDetails}>
                <Text style={styles.title}>{article.title}</Text>
                <View style={styles.metadataContainer}>
                    <Text style={styles.metadata}>{articleDate}{article.author ? ` - ${article.author}` : ''}</Text>
                </View>
                <Text>{article.description ? article.description.split('\n')[0] : ''}</Text>
            </View>
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
        </View>
    );
};

export default Article;