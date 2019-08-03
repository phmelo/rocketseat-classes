import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
import Routes from './routes';

console.tron.log('Nada mudou na interface!');

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
