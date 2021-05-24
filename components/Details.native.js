import React from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { convertDate } from '../utils';

const styles = StyleSheet.create({
    image: {
        height: 300,
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 5,
    },
    articleDetails: {
        padding: 10,
        backgroundColor: 'white'
    },
    metadataContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    metadata: {
        color: '#586069'
    },
    title: {
        fontSize: 28,
        color: '#24292e',
        fontWeight: '700',
    },
    content: {
        textAlign: 'justify',
        marginTop: 10,
    },
    backButton: {
        padding: 7,
        backgroundColor: '#0366d6',
        color: 'white',
        borderRadius: 7,
        overflow: 'hidden',
        margin: 5,
        width: 60,
        textAlign: 'center'
    }
});

const Details = ({ detailedArticle, setPage }) => {
    const articleDate = convertDate(detailedArticle.publishedAt);

    return (
        <View style={styles.articleDetails}>
            <Pressable onPress={() => setPage('home')}>
                <Text style={styles.backButton}>
                    Back
                </Text>
            </Pressable>
            <Text
                style={styles.title}
                onPress={() => Linking.openURL(detailedArticle.url)}
            >
                {detailedArticle.title}
            </Text>
            <View style={styles.metadataContainer}>
                <Text style={styles.metadata}>
                    {articleDate}{detailedArticle.author ? ` - ${detailedArticle.author}` : ''}
                </Text>
            </View>
            <Image
                source={{ uri: detailedArticle.urlToImage ? detailedArticle.urlToImage : 'https://i.imgur.com/vBB0MLy.png' }} 
                style={styles.image}
            />
            <Text style={styles.content}>
                {detailedArticle.content}
            </Text>
        </View>
    );
};

export default Details;