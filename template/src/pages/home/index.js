import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/slogo-azul.png';


function Home() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: 100 }}>
        <img src={logo} style={{ width: 500 }} alt="sebrae-logo" />
      </div>
      <ul>
        <p style={{ fontWeight: 'bold' }}>React PWA Boilerplate Ver. 1.0.0</p>
        <li>
          <Link to={`/user`} >
            User with hooks
          </Link>
        </li>

        <li>
          <Link to={`/user-context`} >
            User with Hooks and Context
          </Link>
        </li>

        <li>
          <Link to={`/cep`} >
            Cep with axios
          </Link>
        </li>

        <li>
          <Link to={`/quiz`} >
            Quiz
          </Link>
        </li>
        

        <li>
          <Link to={`/loading`} >
            Loading
          </Link>
        </li>
        

      </ul>
    </div>
  );
}

export default Home;
