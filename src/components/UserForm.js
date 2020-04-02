import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";

export default function UserForm(props){
  // state = {
  //   name: "",
  //   username: "",
  //   email: ""
  // };
  // console.log(this)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

      // const {name, username, email} = this.state
      // console.log(this.props)

    return (
      <Container>
        <form
          onSubmit={e =>
            props.addUser(
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
          onChange={(e)=>setUsername(e.target.value)}
        />

          <label>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={(e)=>setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="email"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      
      </Container>
    );
  
}

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired
};
