import React, { useState, useEffect, useContext} from "react";
import {UserContext} from './UserContext'

import { Container, Button } from "react-bootstrap";
// import PropTypes from "prop-types";

export default function UserForm() {

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [handleAddUser] = useContext(UserContext)

  useEffect(()=>{
    console.log("form re-rendering")
  })

  return (
    <Container>
      <form
        onSubmit={e =>
            handleAddUser(
            e,
            name,
            username,
            email
          )
        }
      >
        <label>Username</label>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
        />

        <label>Name</label>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="name"
          onChange={e => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

// UserForm.propTypes = {
//   addUser: PropTypes.func.isRequired
// };
