import React from "react";
// child components
import UsersContainer from "./components/UsersContainer";
import UserForm from "./components/UserForm";
// Bootstrap
import { Container } from "react-bootstrap";

export default class App extends React.Component{

  state = {
    users: []
  }

  componentDidMount(){
    this.getUsers();
    console.log("I'm rendering for the first time componentDidMount()");
  }

  // HANDLE EVENT FUNCTIONS
  handleAddUser = (evt, name, username, email) => {
    evt.preventDefault();
    this.postUser(name, username, email);
  };

  handleDelete = id => {
    const resp = window.confirm(`Do you want to delete user with id ${id}?`);

    if (resp) this.deleteUser(id);
  };

  // FETCH FUNCTIONS
  //GET
  getUsers = () => {
    fetch("http://localhost:3004/users") // (function(response){ response.json() })
      .then(resp => resp.json())
      .then(usersOBJ => {
        this.setState({
          users: usersOBJ
        });
      });
  };

  //POST
  postUser = (name, username, email) => {
    fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        username,
        email
      })
    })
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          users: [user, ...this.state.users] // this.state.users.concat(users)
        });
      });
  };

  //DELETE
  deleteUser = id => {
    fetch(`http://localhost:3004/users/${id}`, {
      method: "DELETE"
    }).then(resp => {
      this.setState({
        users: this.state.users.filter(user => user.id !== id)
      });
    });
  };

  render(){
    return (
        <Container>

          <UserForm  handleAddUser={this.handleAddUser}/>
          <UsersContainer handleDelete={this.handleDelete} users={this.state.users}/>

        </Container>
    );
  }

}
