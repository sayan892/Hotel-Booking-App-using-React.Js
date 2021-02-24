import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <i className="fas fa-bars"></i>
      <h4 className="h">Pinpoinx</h4>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <i className="fas fa-bell"></i>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
