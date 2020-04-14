import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";


export default class UserForm extends React.Component{

  state = {
    name: "",
    username: "",
    email: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    }) 
  }

  handleSubmit = (evt) =>{
    const {handleAddUser} = this.props;
    const {name, username, email} = this.state

    handleAddUser(
      evt,
      name,
      username,
      email
    )

    this.setState({
      name: "",
      username: "",
      email: ""
    })


  }

  
  render(){

    const {name, username, email} = this.state

    return (
      <Container>
        <form
          onSubmit={evt =>
           this.handleSubmit(evt)
          }
        >

        <label>Username</label>
        <input
          type="text"
          value={username}
          name="username"
          placeholder="username"
          onChange={(evt)=> this.handleChange(evt)}
        />

          <label>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={(evt)=> this.handleChange(evt)}
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="email"
            onChange={(evt)=> this.handleChange(evt)}
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      
      </Container>
    );

  }
  
}

UserForm.propTypes = {
  handleAddUser: PropTypes.func.isRequired
};
