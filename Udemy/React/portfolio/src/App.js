import React from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import projectImage from './assets/project.jpg';


import './App.css';

function App() {
  
  const projects = [
    {
        id: 1,
        name: "Severance Payment Calculator",
        description: "This application enables users to calculate worker’s severance payments depending on the input data provided, such as reason for employment termination or jurisdiction, in accordance with Argentine labor law. Users are able to store all of the calculations performed in the account they create. For this project I wrote the front-end with HTML, CSS and Bootstrap, the back-end with Python. The data provided by the user is stored in a SQL database, and the application is run in Django.",
        image: {projectImage}
    },
    {
        id: 2,
        name: "E-Commerce Marketplace",
        description: "This project allows users to create an account, and add (publicitar en una bolsa con todos los productos de todos los usuarios) sports goods they want to sell. Additionally, Users can edit the product created by themselves. For this application I wrote the front-end with JSP, CSS and Bootstrap, the back-end with Java. The data provided by the user is stored in a SQL database, and the application is run in Spring.",
        image: {projectImage}
    },
    {
        id: 3,
        name: "Tic Tac Toe",
        description: "Coming soon!",
        image: {projectImage}
    },
    {
        id: 4,
        name: "Pig Game",
        description: "This project allows users to create an account, and add (publicitar en una bolsa con todos los productos de todos los usuarios) sports goods they want to sell. Additionally, Users can edit the product created by themselves. For this application I wrote the front-end with JSP, CSS and Bootstrap, the back-end with Java. The data provided by the user is stored in a SQL database, and the application is run in Spring.",
        image: {projectImage}
    }
  ];
  return (
    <div className="App">
      <MainHeader />
      <AboutMe />
      <Projects projectsInfo={projects}/>
    </div>
  );
}

export default App;
