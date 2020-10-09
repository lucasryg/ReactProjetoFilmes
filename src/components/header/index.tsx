import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import '../../assets/styles/global.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  description: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="principal">
      <div className="header">
        <nav>
          <div>
            <Link to="/"><img src={logo} alt="o logo da coletânea" /></Link>
            <h1>{props.description}</h1>
          </div>
          <div id="buttonsNav">
            <Link to="/"><a>Home</a></Link>
            <Link to="/login"><a>Login</a></Link>
            <Link to="/cadastro"><a>Cadastro</a></Link>
          </div>

        </nav>
      </div>
    </div>
  );
}

export default Header;
