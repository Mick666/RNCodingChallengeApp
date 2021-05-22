import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { API_KEY } from '@env';

import Details from './components/Details';
import Home from './components/Home';

const App = () => {
  const [page, setPage] = useState('home');
  const [detailedArticle, setArticle] = useState(null);
  const [articles, setArticles] = useState(null);

  const backgroundStyle = {
    backgroundColor: '#e1e4e8'
  };

  const fetchNewsArticles = async (setRefreshing) => {
    const fetchResult = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`);
    const json = await fetchResult.json();
    setArticles(json);
    if (setRefreshing) setRefreshing(false);
  };

  useEffect(() => {
    fetchNewsArticles();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      {page === 'home' ?
        <Home
          setPage={setPage}
          articles={articles}
          setArticle={setArticle}
          fetchNewsArticles={fetchNewsArticles}
        />
        :
        <Details
          detailedArticle={detailedArticle}
          setPage={setPage}
        />
      }
    </SafeAreaView>
  );
};


export default App;
