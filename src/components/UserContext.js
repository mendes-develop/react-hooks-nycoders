import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

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
  //GET User
  const getUsers = () => {
    fetch("http://localhost:3004/users")
      .then(resp => resp.json())
      .then(usersOBJ => {
        setUsers(usersOBJ);
      });
  };

  //POST User
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
      .then(newUser => {
        setUsers([newUser, ...users]);
      });
  };

  //DELETE
  const deleteUser = id => {
    fetch(`http://localhost:3004/users/${id}`, {
      method: "DELETE"
    }).then(resp => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <UserContext.Provider value={[users, handleAddUser, handleDelete]}>
      {props.children}
    </UserContext.Provider>
  );
};
