import React from 'react';
import './App.css';
import { SocialList } from './shared/ui/social-list';
import { Navigation } from './shared/ui/navigation';
import { Background } from './shared/ui/background';

export const App = () => (
  <div className="App">
    <Background />
    <Navigation />
    <SocialList />
  </div>
);
