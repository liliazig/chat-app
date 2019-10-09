import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Contact name = "Anita Mespelottes" avatar = "https://randomuser.me/api/portraits/women/25.jpg" online/>
        <Contact name = "Paty Olson" avatar = "https://randomuser.me/api/portraits/women/20.jpg" />
        <Contact name = "Seth Wheeler" avatar = "https://randomuser.me/api/portraits/men/41.jpg" online/>
    </div>
  );
}

export default App;
