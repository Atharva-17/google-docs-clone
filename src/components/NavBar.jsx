import React from "react";
import "../styles/NavBar.css"
import TopLeftNav from "./navbar/TopLeftNav";
import TopRightNav from "./navbar/TopRightNav";

function NavBar({toolbarOpen}) {
  return (
    <>
      <header
        className="navbar"
        style={{ display: toolbarOpen ? "flex" : "none" }}
      >
        <TopLeftNav />
        <TopRightNav />
      </header>
    </>
  );
}

export default NavBar;
