import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/FondoHome.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div
        className="headerCointainer"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1>Patricio Hamburguers</h1>
        <p>Hamburguesas desde 1989</p>
        <Link to="/menu">
          <button>¡Reserva tu mesa!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
