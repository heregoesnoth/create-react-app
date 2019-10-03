import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CepService from '../../services/cep/CepService';
import logo from '../../assets/img/logo.svg';

class Cep extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      endereco: '',
    }
  }
  _handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    const { state } = this
    const { cep } = state

    event.preventDefault();
    CepService.getAddress(cep).then((response) => {
      const { logradouro } = response.data
      this.setState({
        endereco: logradouro
      })
      console.log(response)
    }, (error) => {
      console.log(error)
    })

  }

  render() {
    const { state } = this
    const { cep, endereco } = state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="cep">CEP</Label>
              <Input name="cep" id="cep" placeholder="CEP" value={cep} onChange={this._handleChange} />
              <div>{endereco}</div>
            </FormGroup>
            <Button type="submit">Buscar</Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default Cep