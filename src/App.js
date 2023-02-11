import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Body />
    </div>
  );
}

export default App;
