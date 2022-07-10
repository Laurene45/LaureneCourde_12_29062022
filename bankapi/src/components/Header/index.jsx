import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import './Header.scss';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <nav className="main-nav">
			<Link to="/">
				<img className="main-nav-logo-image" src={logo} alt="logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			
				<div>
					<Link to="./login" className="main-nav-item">
          <i className="fa fa-user-circle">
            <FontAwesomeIcon icon={faUserCircle} />
          </i>
						<span className="main-nav-item">Sign In</span>
					</Link>
				</div>
		</nav>
  );
};
export default Header;


