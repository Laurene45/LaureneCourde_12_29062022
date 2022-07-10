import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import 'Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo page d'accueil" />
      </Link>

      <div>
        <Link to="login" className="login">
          <i className="fa fa-user-circle"></i>
          <span>Sing in</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;
