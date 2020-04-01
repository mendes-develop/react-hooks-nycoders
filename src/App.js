import React, {useState} from "react";

// child components
import UsersContainer from "./components/UsersContainer";
import UserForm from "./components/UserForm";

// Bootstrap
import { Container } from "react-bootstrap";

const App = ()=> {

  // state = {
  //   users: []
  // };
  const [users, setUsers] = useState([])
  
  // componentDidMount() {
  //   this.getUsers();
  // }

  // HANDLE EVENT FUNCTIONS
  const handleAddUser = (e, name, username, email) => {
    e.preventDefault();
    postUser(name, username, email);
  };

  const handleDelete = id => {
    const resp = window.confirm(`Do you want to delete user with id ${id}?`);

    if (resp) {
      deleteUser(id);
    }
  };
  
  
  // FETCH FUNCTIONS
  
  //GET
  const getUsers = () => {
    fetch("http://localhost:3004/users") // (function(response){ response.json() })

    .then(resp => resp.json())
    .then(usersOBJ => {
        // this.setState({
        //   users: usersOBJ
        // });
        setUsers(usersOBJ)
      });
  };

  //POST
  const postUser = (name, username, email) => {
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
        // this.setState({
        //   users: [...this.state.users, user] // this.state.users.concat(users)
        // });
        setUsers([...this.state.users, user])
      });
    };
    
    //DELETE
  const deleteUser = id => {
    fetch(`http://localhost:3004/users/${id}`, {
      method: "DELETE"
    }).then(resp => {
      // this.setState({
      //   users: this.state.users.filter(user => user.id !== id)
      // });
      setUsers(this.state.users.filter(user => user.id !== id))
    });
  };

  return (
    <Container>
      <UserForm addUser={handleAddUser} />
      <UsersContainer users={users} deleteUser={handleDelete} />
    </Container>
  );

}

export default App;
