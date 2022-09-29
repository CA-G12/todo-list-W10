import React from 'react';
import './Navbar.css'
function NavProfile({ LogOut, userName }) {
  return (
    <nav>
      <div className="container">
        <h2 className="logo">
          <img src="../../../logo.png" alt="logo" />
          NotPads
        </h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input type="search" name="Search" placeholder="SEARCH" />
        </div>
        <div className="create">
          <div className="profile-photo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqbqoVON5_AVsyHbfQNlcIJjMpl3-RlY7DA&usqp=CAU"
              alt="profile-photo"
            />
          </div>
          <h4>{userName}</h4>
          <div>{LogOut}</div>
        </div>
      </div>
    </nav>
  );
}

export default NavProfile