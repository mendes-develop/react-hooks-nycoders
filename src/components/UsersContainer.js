import React, {useContext} from "react";
import {UserContext} from './UserContext'
import DisplayUser from "./DisplayUser";
// import PropTypes from "prop-types";

//styling
import { Container, Row } from "react-bootstrap";

export default function UsersContainer() {

  const [users] = useContext(UserContext)

  return (
    <Container>
      <Row>
        {users.map(user => (
          <DisplayUser
            user={user}
            key={user.id}
          />
        ))}
      </Row>
    </Container>
  );
}

// UsersContainer.propTypes = {
//   deleteUser: PropTypes.func.isRequired,
//   users: PropTypes.array.isRequired
// };
