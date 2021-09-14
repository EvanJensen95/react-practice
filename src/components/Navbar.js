import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Wherever You Go <i className="fab fa typo3" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
