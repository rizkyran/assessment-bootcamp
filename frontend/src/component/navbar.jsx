import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/action/userAction";
import { useHistory, useLocation } from "react-router-dom";
// import {Navbar, Nav} from "react-bootstrap"

const Header = () => {
  const [pageURL, setPageURL] = useState("");
  const authUser = !!localStorage.getItem("access_token");
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setPageURL(location.pathname);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push("/login");
  };

  return (
    <>
      <div className="container-fluid navbar-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand title link" href="/">Password Manager</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                {authUser && (
                  <>
                    <a className="mr-5" onClick={handleLogout}>
                      Logout
                    </a>
                  </>
                )}
                {!authUser && (
                  <>
                    {pageURL === "/register" || (
                      <a href="/register" className="mr-5">
                        Register
                      </a>
                    )}
                    {pageURL === "/login" || (
                      <a href="/login" className="mr-5">
                        Login
                      </a>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;