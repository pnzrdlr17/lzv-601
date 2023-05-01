import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';
import Button from '../FormElements/Button';
const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/lz77">LZ-77</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/lzw">LZW</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <Button flip onClick={auth.logout} className="user-name">
            <span>{auth.userName}</span>
          </Button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
