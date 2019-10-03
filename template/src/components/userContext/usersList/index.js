import React, { useContext } from "react";
import { UsersContext } from "../context";
import './styles.css';

const UsersList = props => {
  const usersContext = useContext(UsersContext);

  const { users, selectedUser, setSelectedUser } = usersContext;

  return (
    <div>
      <h4>Users: </h4>
      {users.map(user => {
        return (
          <div
            className={user.id === selectedUser.id ? 'user-item-selected' : 'user-item'}
            key={user.id}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
