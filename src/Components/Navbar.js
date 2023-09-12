import { Close, MenuOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import React, {useState} from "react";
import './styles/Navbar.css';


const Navbar = () => {

  const [navActive, setNavActive ] = useState(false)

  const openMenu = () => {
    setNavActive(!navActive)
  }

  return (
    <div className="navbar">
      <div  className="logo">
        <NavLink to="/">
        <span>Isex</span>
        </NavLink>
      </div>

      <nav>
        <ul className={navActive? "list-items active" : "list-items"}>
          <div className="close-icon">
            <Close className="close" onClick={openMenu} />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/works">Works</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="hamburger-icon">
        <MenuOutlined className="icon" onClick={openMenu} />
      </div>
      
    </div>
  )
}

export default Navbar;
