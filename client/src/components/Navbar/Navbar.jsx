





import "./Navbar.css";
import "../Login/Login";
import { Link, useLocation } from "react-router-dom";
import Auth from '../../utils/auth';

const Navbar = () => {
  const currentPage = useLocation().pathname;

  if (Auth.loggedIn()) {
    return (
      <nav className="nav-wrapper d-flex">
        <div className="nav-content">
          <h1 className="title">CatMates.com</h1>
          <h4 className="sub-title">The purrrrfect care for when you are not there</h4>
          <ul>
            <li>
              <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"} id="menu-item">Home</Link>
            </li>
            <li>
              <Link to="/Profile" className={currentPage === "/" ? "nav-link active" : "nav-link"} id="menu-item">Profile</Link>
            </li>
            <li>
              <Link to="/FurryFriends" className={currentPage === "/" ? "nav-link active" : "nav-link"} id="menu-item">Furry Friends</Link>
            </li>
            <li>
              <button onClick={Auth.logout} className="logout-btn">Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="title">CatMates.com</h1>
          <h4 className="sub-title">The purrrrfect care for when you are not there</h4>
          <ul>
            <li>
              <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"} id="menu-item">Home</Link>
            </li>
            <li>
              <Link to="/Login" className="login-btn">Login</Link>
            </li>
            <li>
              <Link to="/SignUp" className="create-acc-btn">Join</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;





