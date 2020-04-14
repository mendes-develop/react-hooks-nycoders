import React, {useState, useEffect} from "react";
// child components
import UsersContainer from "./components/UsersContainer";
import UserForm from "./components/UserForm";
// Bootstrap
import { Container } from "react-bootstrap";
// Context API
import {UserProvider} from './context/userContext'

const App = (props) => {


    return (
      <UserProvider>
        <Container>

          <UserForm />
          <UsersContainer/>

        </Container>
      </UserProvider>
    );
  

}

export default App
