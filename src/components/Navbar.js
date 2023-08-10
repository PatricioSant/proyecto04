import React from "react";
import Logotipo from "../assets/Logotipo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logotipo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contacto">Contacto</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
