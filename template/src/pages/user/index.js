import React, { useState } from 'react';
import UserList from '../../components/user/userList/index';
import UserForm from '../../components/user/userForm/index';
import SweetAlert from 'react-bootstrap-sweetalert';

const User = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const initialFormState = {
    id: null,
    name: '',
    username: '',
  };

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [success, setSuccess] = useState(false)


  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
    setSuccess(true)
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    setSuccess(true)
  }

  const editUser = user => {
    setEditing(true)
    setCurrentUser(user)
  }

  const updateUser = (updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)))
    setSuccess(true)
  }

  return (
    <div>
      <h1>CRUD With Hooks</h1>
      <div>
        <h2>{editing ? 'Editing' : 'New'} User</h2>
        <UserForm onSubmit={editing ? updateUser : addUser} editing={editing} currentUser={currentUser} />
      </div>
      <br />
      <div>
        <h2>Users List</h2>
        <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>

      <SweetAlert success title="Eye!" show={success} onConfirm={() => setSuccess(false)}>
        Operação realizada com sucesso!
      </SweetAlert>

    </div>
  )
}

export default User