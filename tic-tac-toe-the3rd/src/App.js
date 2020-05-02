import React from 'react';
import './App.css';
import Game from './Game'
import BoardContextProvider from './context/BoardContextProvider';

function App() {
  return (
    <div className="App">
      <BoardContextProvider>
         <Game/>
      </BoardContextProvider>
    </div>
  );
}

export default App;
