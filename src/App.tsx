import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import './index.css'
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import InfoTinyCards from './components/InfoTinyCards/InfoTinyCards';
import HorizontalLine from './components/HorizontalLine/HorizontalLine';
import NewsCards from './components/NewsCards/NewsCards';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <InfoTinyCards />
      <HorizontalLine />
      <NewsCards />
    </div>
  );
}

export default App;
