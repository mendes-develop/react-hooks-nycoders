import React, {useEffect, useContext} from "react";
import {UserContext} from './UserContext'
// import PropTypes from "prop-types";

//styling
import { Card, Container, Button } from "react-bootstrap";

export default function DisplayUser({user}) { // const {deleteUser, user} = props  // => <DisplayUser user={user} deleteUser={deleteUser} />
  //access props and display each element on its own div

  const [handleDelete] = useContext(UserContext)

    useEffect(()=>{

      // console.log("Component updating")

      return () => console.log(`Here lies a great component with id: ${user.id}.`)

    }, [user])


  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Container>
        <h3>{user.username}</h3>
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>

        <Button variant="danger" onClick={() => handleDelete(user.id)}>
          Delete User
        </Button>
      </Container>
    </Card>
  );
}

// DisplayUser.propTypes = {
//   user: PropTypes.object.isRequired,
//   deleteUser: PropTypes.func.isRequired
// };
