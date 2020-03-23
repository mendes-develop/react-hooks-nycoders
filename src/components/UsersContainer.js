import React, {useContext} from "react";
import {UserContext} from './UserContext'
import DisplayUser from "./DisplayUser";

//styling
import { Container, Row } from "react-bootstrap";

export default function UsersContainer() {

  // implementing useContext
  const [users] = useContext(UserContext) 
  // -> returns the array with values we stored
  // -> we use destructuring to grab the values we want 

  return (
    <Container>
      <Row>
        {users.map(user => (
          <DisplayUser
            user={user} {/* reading data -user- from state  */}
            key={user.id}
          />
        ))}
      </Row>
    </Container>
  );
}
