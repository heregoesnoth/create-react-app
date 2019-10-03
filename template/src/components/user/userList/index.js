import React from 'react'
import { Table, Button } from 'reactstrap'
import { FaTrash, FaPen } from 'react-icons/fa';

const UserList = props => (

  <Table size="sm">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th colSpan={2}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>
            <Button color="danger" onClick={() => props.deleteUser(user.id)}>
              <FaTrash />
            </Button>
          </td>
          <td>
            <Button color="secondary" onClick={() => props.editUser(user)}>
              <FaPen/>
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>

)

export default UserList