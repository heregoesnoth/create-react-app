import React from 'react';
import { UsersContextProvider } from '../../components/userContext/context';
import UsersList from '../../components/userContext/usersList'
import UserDeails from '../../components/userContext/userDetails'
import AddUser from '../../components/userContext/addUser'

import "./styles.css";


const UsersWithContext = () => {
  const users = [{ id: 1, name: "John" }, { id: 2, name: "Joanna" }];

  return (
    <UsersContextProvider users={users}>
      <h2>Using context and hooks</h2>
      <p>
        'UsersList', 'UserDetails' and 'AddUser' are three different
        components which use the same shared state through a context called
        "UsersContext"
        </p>
      <div className="users-container">
        <UsersList />
        <UserDeails />
      </div>
      <AddUser />
    </UsersContextProvider>
  )
}

export default UsersWithContext;