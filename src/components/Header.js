import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Link className="logbutton" to="/signup">
        S'inscrire
      </Link>
      <Link className="logbutton" to="/login">
        Se connecter
      </Link>
      <button className="sell">Vends maintenant</button>
    </div>
  );
};

export default Header;
