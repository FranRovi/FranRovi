import React, { useState } from 'react';

import MainHeader from './components/MainHeader/MainHeader';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import projectImage from './assets/project.jpg';


import './App.css';

function App() {
  const [aboutMeState, setAboutMeState] = useState(true);
  const [projectsState, setProjectsState] = useState(false);
  const [contactState, setContactState] = useState(false);
  // usar useState para usar este valor asi me actualiza el component!!!!
  // let nacho = null;
  
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

  const aboutMeStateHandler = (currentState) => {
    // var aboutMeState = currentState;
    setAboutMeState(currentState);
    // console.log(`nacho: ${nacho}`);
    // console.log(currentState + ' in app.js');
  }

  const projectsStateHandler = (currentState) => {
      setProjectsState(currentState);
  }
  const contactStateHandler = (currentState) => {
    setContactState(currentState);
  }


  return (
    <div className="App">
      {/* {AboutMeState && <MainHeader onAboutMeState={aboutMeStateHandler} />} */}
      <MainHeader onAboutMeState={aboutMeStateHandler} onProjectState={projectsStateHandler} onContactState={contactStateHandler} />
      {aboutMeState  &&  <AboutMe />}
      {projectsState && <Projects projectsInfo={projects}  />}
      {contactState && <ContactMe />}
    </div>
  );
};

export default App;
