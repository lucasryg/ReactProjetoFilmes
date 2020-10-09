import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../assets/styles/global.css';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
      <Header description="Faça o login para acessar a Coletanea" />
      <div className="centro">

        <h1>Login </h1>
        <div className="form">
          <form>
            <Input type="email" name="email" label="Email"></Input>
            <Input type="password" name="senha" label="Senha" ></Input>
          </form>
              
        </div>
          <Link to="/"><Button title="Enviar"></Button></Link>

      </div>
      <Footer />
    </div>
  );
}

export default Login;