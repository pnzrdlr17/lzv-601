import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './Home.css';
import Auth from '../Auth/Auth';

const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <React.Fragment>
      <div className="home-flex">
        <div className="wlcm-text">
          <div className="line1">Welcome to</div>
          <br />
          <div className="line2">Lempel - Ziv Algorithm Visualizer</div>
        </div>
        <div className="alg-btns">
          {!auth.isLoggedIn && <Auth />}
          {auth.isLoggedIn && (
            <NavLink to="/lz77" className="btn-1">
              Lempel - Ziv 77
            </NavLink>
          )}
          {auth.isLoggedIn && (
            <NavLink to="/lzw" className="btn-2">
              Lempel - Ziv Welch
            </NavLink>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
