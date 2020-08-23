import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="app-name">To Do App</span>
          <Todo />
      </header>
    </div>
  );
}

export default App;
