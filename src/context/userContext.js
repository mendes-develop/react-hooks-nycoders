import React, {useState, useEffect} from "react";

export const UserContext = React.createContext()

export const UserProvider = (props) => {


  const [users, setUsers] = useState([])

  // state = {
  //   users: []
  // }

  // componentDidMount(){
  //   this.getUsers();
  // }

  useEffect( ()=>{ // componentDidMount, componentDidUpdate, 
    getUsers()
    console.log("Component mounts")
  }, [])

  // HANDLE EVENT FUNCTIONS
  const handleAddUser = (evt, name, username, email) => {
    evt.preventDefault();
    postUser(name, username, email);
  };

  const handleDelete = id => {
    const resp = window.confirm(`Do you want to delete user with id ${id}?`);

    if (resp) deleteUser(id);
  };

  // FETCH FUNCTIONS
  //GET
  const getUsers = () => {
    fetch("http://localhost:3004/users") // (function(response){ response.json() })
      .then(resp => resp.json())
      .then(usersArr => {
        // this.setState({
        //   users: usersOBJ
        // });
        setUsers(usersArr)
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
        //   users: [user, ...this.state.users] // this.state.users.concat(users)
        // });
        setUsers([user, ...users])
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
      setUsers(users.filter(user => user.id !== id))
    });
  };



    return (
        <UserContext.Provider value={{users, handleDelete, handleAddUser}}>
            {props.children}
        </UserContext.Provider>
    )
}


