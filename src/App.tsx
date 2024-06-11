import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import InfoTinyCards from './components/InfoTinyCards/InfoTinyCards';
import HorizontalLine from './components/HorizontalLine/HorizontalLine';
import SliderNews from './components/SliderNews/SliderNews';
import TeachersCards from './components/TeachersCards/TeachersCards';

import './App.css';
import VideoSection from './components/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <InfoTinyCards />
      <HorizontalLine />
      <SliderNews />
      <TeachersCards />
      <VideoSection videoId="gor6dptvj1Q" />
    </div>
  );
}

export default App;
