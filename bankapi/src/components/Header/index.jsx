import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import './Header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { userActions } from '../../redux/userSlice';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const { token } = useSelector((state) => state.user);
  const { firstName } = useSelector((state) => state.user);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="main-nav">
      <Link to="/">
        <img className="main-nav-logo-image" src={logo} alt="logo" />
      </Link>

      {token ? (
       
          <div className="main-nav-item">
            <div
              onClick={() => {
                navigate({pathname:'/profile'});
              }}
            >
              <i className="fa fa-user-circle">
                <FontAwesomeIcon icon={faUserCircle} />
              </i>
                <span>{firstName}</span>
              
            </div>

            <div
              onClick={() => {
                dispatch(userActions.logout());
              }}
            >
              <i className="fa fa-sign-out">
                <FontAwesomeIcon icon={faSignOut} />
              </i>
              <span>Sign Out</span>
            </div>
          </div>
        
      ) : (
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle">
              <FontAwesomeIcon icon={faUserCircle} />
            </i>
            <span className="main-nav-item">Sign In</span>
          </Link>
        </div>
      )}
      {''}
    </nav>
  );
};

export default Header;
