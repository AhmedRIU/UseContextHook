import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-cont">
        <img
          className="img-logo"
          src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ=w600-h300-pc0xffffff-pd"
          alt="logo"
        />
      </div>
      <div className="nav-item">
        <ul className="nav-ul">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
