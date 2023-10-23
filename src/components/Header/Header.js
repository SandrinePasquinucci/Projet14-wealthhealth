import "./header.css";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function returnHome() {
    navigate("/");
  }
  return (
    <div className="logo-title">
      <a href="/" onClick={returnHome}>
        <img alt="Logo" className="logo" src={Logo} />
      </a>
      <h1 className="title">HRnet</h1>
    </div>
  );
}
export default Header;
