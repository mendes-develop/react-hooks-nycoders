import React, {useState, useContext} from "react";
import {UserContext} from '../context/userContext'
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";


export default function UserForm(props){

  // const [state, setState] = useState({name: "", username: "", email: ""})

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const {handleAddUser} = useContext(UserContext)



  // state = {
  //   name: "Alex",
  //   username: "Mendes",
  //   email: ""
  // }

  // handleChange = (evt) => {
  //   setState({
  //     [evt.target.name] : evt.target.value
  //   }) 
  // }

  const handleSubmit = (evt) =>{
    // const {handleAddUser} = props;
 
    handleAddUser(
      evt,
      name,
      username,
      email
    )

    // this.setState({
    //   name: "",
    //   username: "",
    //   email: ""
    // })

    setName("")
    setUsername("")
    setEmail("")

  }


    // const {name, username, email} = this.state

    return (
      <Container>
        <form
          onSubmit={evt =>
           handleSubmit(evt)
          }
        >

        <label>Username</label>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={(evt)=> setUsername(evt.target.value)}
        />

          <label>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={(evt)=> setName(evt.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="email"
            onChange={(evt)=> setEmail(evt.target.value)}
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      
      </Container>
    );

  
}

UserForm.propTypes = {
  handleAddUser: PropTypes.func.isRequired
};
