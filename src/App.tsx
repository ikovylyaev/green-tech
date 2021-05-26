import React from 'react';
import './App.sass';
import "./index.css"
import './components/main/Main'
import Main from "./components/main/Main";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Main />
        <About />
        <Contacts />
    </div>
  );
}

export default App;
