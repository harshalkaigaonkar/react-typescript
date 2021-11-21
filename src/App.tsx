import React from 'react';
import './App.css';
import Header from './Header';
import { TextField } from './TextField';
import UseState from './UseState';

const App: React.FC = () => {
  const cfn = (bob: string) => {
    return bob
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Hello World!" color="gold" />
        <TextField text="asdf" fn={cfn}  />
        <UseState />
      </header>
    </div>
  );
}

export default App;
