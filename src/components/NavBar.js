import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >

<nav>
      <ul>
        <li>
          <Link style={{ marginRight: "10px" }} to="/">Home</Link>
        </li>
        <li>
          <Link style={{ marginRight: "10px" }} to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>

     
    </div>
  );
}

export default NavBar;
