import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='container'>
      <div>
        <img src={Logo} alt="logoHenry" />
      </div>
      <h5>Henry Weather App</h5>
      <SearchBar/>
    </div>
  );
};

export default Nav;