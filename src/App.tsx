import React from 'react';
import './App.css';
import { SocialList } from './shared/ui/social-list';
import { Navigation } from './shared/ui/navigation';

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src="/assets/background.mp4" autoPlay loop muted />
      <Navigation />
      <SocialList />
    </div>
  );
}

export default App;
