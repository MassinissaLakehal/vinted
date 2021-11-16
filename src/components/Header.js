import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <button className="logbutton">S'inscrire</button>
      <button className="logbutton">Se connecter</button>
      <button className="sell">Vends tes articles</button>
    </div>
  );
};

export default Header;
