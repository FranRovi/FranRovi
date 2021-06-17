import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList ] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {id: Math.random().toString(), name: userName, age: userAge}];
    });
  };

  return (
    // Can algo write short version for this <> </> is project settings are properly set.
    <React.Fragment>
      {/* <h1>Hello World!</h1> */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
