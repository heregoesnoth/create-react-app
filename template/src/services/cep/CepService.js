import axios from 'axios';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws'

const api = axios.create({
	baseURL: baseUrl,
});

export default class CepService {

  static getAddress = async (cep) => {
    return await api.get(`/${cep}/json/`);
  }

}