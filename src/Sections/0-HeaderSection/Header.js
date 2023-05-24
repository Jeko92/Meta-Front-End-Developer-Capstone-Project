import HeaderLogo from "../../assets/logos/header-logo1.png";
import "../sections-styles/Header.css";
import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-wrapper container-xl">
          <div>
            <Link className="header-logo" to="/">
              <img src={HeaderLogo} alt="Logo of Little Lemon" />
            </Link>
          </div>
          <Navigation />
          <div className="login-btn--container">
            <button className="login-btn">
              <IoIosLogIn />
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
}