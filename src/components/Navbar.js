import "../App.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  let location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top" style={{width:"100%"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">iNotebook</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${ location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/"> Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ location.pathname === "/about" ? "active" : ""}`} to="/about"> About</Link>
              </li>
       
       

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
                <li className="nav-item">
                <Link className={`nav-link ${ location.pathname === "/purpose" ? "active" : ""}`} to="/purpose">Purpose</Link>
              </li>
              
                <li className="nav-item">
                <Link className={`nav-link ${ location.pathname === "/help" ? "active" : ""}`} to="/help">Help</Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <Link
                  className="btn btn-outline-dark mx-2
                  "
                  to="/singup"
                  role="button"
                >
                  Get Start
                </Link>
                <Link
                  className="btn btn-outline-dark mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
              </form>
            ) : (
              <button className="btn btn-outline-dark" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
