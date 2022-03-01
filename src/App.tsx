import React from 'react';
import './App.css';
import { SocialList } from './shared/ui/social-list';
import { Navigation } from './shared/ui/navigation';
import { Background } from './shared/ui/background';
import { Description } from './shared/ui/description';
import { Logo } from './shared/ui/logo';

export const App = () => (
  <div className="App">
    <Background />
    <Navigation />
    <SocialList />
    <Description />
    <Logo />
  </div>
);
