import "./Navbar.css";
import "../Login/Login";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPage = useLocation().pathname;

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="title">CatMates.com</h1>
        
          <h4 className="sub-title">
            The purrrrfect care for when you are not there
          
            
          </h4>
          <ul>
            <li>
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                id="menu-item"
              >
                Home
              </Link>
            </li>
            <Link
              to="/Account"
              className={currentPage === "/" ? "nav-link active" : "nav-link"}
              id="menu-item"
            >
              Account
            </Link>
            <li>
              <Link
                to="/FurryFriends"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                id="menu-item"
              >
                Furry Friends
              </Link>
            </li>
            <Link 
                to="/Login"
              className="login-btn">Login
         </Link>
            
              <Link 
                to="/SignUp"
              className="create-acc-btn">Sign Up
         </Link>
           
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
