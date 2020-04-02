import React, {useState, useEffect} from "react";
import {UserProvider} from './context/userContext'

// child components
import UsersContainer from "./components/UsersContainer";
import UserForm from "./components/UserForm";

// Bootstrap
import { Container } from "react-bootstrap";

const App = (props)=> {

  return (
    <UserProvider>
      <Container>
        <UserForm  />
        <UsersContainer />
      </Container>
    </UserProvider>
  );

}

export default App;
