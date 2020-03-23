import React from "react";
import {UserProvider} from './components/UserContext'
import UsersContainer from "./components/UsersContainer";
import UserForm from "./components/UserForm";
import { Container } from "react-bootstrap";

const App = () => {
  
  return (
    <UserProvider>
    
      <Container>
        <UserForm />
        <UsersContainer/>
      </Container>

    </UserProvider>
  );
};

export default App;
