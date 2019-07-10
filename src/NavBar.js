import React from "react";
import Calender from "./Calender"
import { Link } from "react-router-dom"



const Navbar = props => (
  <header>
    <nav>

      <div className="Home"> <span className="title">Currancy Exchange</span><Link to="/">Home</Link>   <Link to="/about">About</Link> <Link to="/currencies">Currencies</Link> <Link to="/support">Support</Link>
        <Calender /></div>
    </nav>
  </header>
);


export default Navbar;
