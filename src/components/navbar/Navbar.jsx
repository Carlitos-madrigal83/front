import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src= { logo } alt="logo"/>
      </div>
      <div className="menu">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
