import React from 'react';

import Projects from './components/Projects';


import './App.css';

function App() {
  const projects = [
    {
        id: 1,
        name: "Severance Payment Calculator",
        description: "Severance Payment Calculator description"
    },
    {
        id: 2,
        name: "E-Commerce Marketplace",
        description: "E-Commerce Marketplace description"
    },
    {
        id: 3,
        name: "Tic Tac Toe",
        description: "Tic Tac Toe description"
    },
    {
        id: 4,
        name: "Pig Game",
        description: "Pig Game description"
    }
  ];
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Projects projectsInfo={projects}/>
    </div>
  );
}

export default App;
