import React, { useState } from 'react';
import { FlatList, Pressable, RefreshControl, Text } from 'react-native';
import Article from './Article.native';

const Home = ({ setPage, articles, setArticle, fetchNewsArticles }) => {
    const [refreshing, setRefreshing] = useState(false);
    
    const changePage = (article) => {
        setArticle(article);
        setPage('detailed');
    };
    
    const onRefresh = () => {
        setRefreshing(true);
        fetchNewsArticles(setRefreshing);
    };

    if (!articles) return <Text>Loading</Text>;


    return (
        <FlatList
            data={articles.articles}
            renderItem={(({ item, index }) => {
                return (
                    <Pressable
                        onPress={() => changePage(item)}
                        key={index}
                    >
                        <Article
                            article={item}
                        />
                    </Pressable>
                );
            }
            )}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
    );
};

export default Home;