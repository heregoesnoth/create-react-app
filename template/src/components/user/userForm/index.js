import React, { useState, useEffect } from 'react'
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';

const UserForm = props => {

  const initialFormState = {
    id: null,
    name: '',
    username: '',
  };

  const { editing, currentUser } = props
  const [user, setUser] = useState(editing ? currentUser : initialFormState)

  const _handleChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const _onSubmit = event => {
    console.log(event)
    console.log(user)
    event.preventDefault()
    props.onSubmit(user)
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
      <Form onSubmit={_onSubmit} name='formTeste'>
        <Row form> 
          <Col md={6}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                value={user.name}
                onChange={_handleChange}
                valid={user.name !== null && user.name !== ''}
                invalid={user.name === ''}
              >
              </Input>

              <FormFeedback invalid='true'>
                Please fill this field!
              </FormFeedback>

            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='email'>Username</Label>
              <Input
                type='text'
                name='username'
                id='username'
                value={user.username}
                onChange={_handleChange}
                invalid={user.username === ''}
              />

              <FormFeedback invalid='true'>
                Username is required :)
              </FormFeedback>

            </FormGroup>
          </Col>
        </Row>
        <Button color='primary' type='submit'>Save</Button>
      </Form>
  )
}

export default UserForm