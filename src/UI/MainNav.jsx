import { HiMagnifyingGlass, HiUser } from "react-icons/hi2";
import logo from "../Images/logo.jpg";

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-ul">
        <img src={logo} alt="" className="logo" />

        <li className="main-nav-li">
          <strong> Deliver to:</strong> Current Location{" "}
          <strong>Mohammadpur Bus Stand, Dakota</strong>
        </li>

        <div className="btn-div">
          <form action="">
            <li className="main-nav-li input-form">
              <HiMagnifyingGlass className="icon-search" size={"18px"} />
              <input
                type="text"
                placeholder="  Search Food"
                className="input-form form-hover"
              />
            </li>
          </form>

          <button className="main-nav-li btn-login">
            <HiUser icon-search size={"18px"} />
            login
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default MainNav;
