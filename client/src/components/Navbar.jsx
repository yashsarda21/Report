import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
    const { isLoggedIn, user } = useAuth();
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleCloseNavbar = () => {
        setShowNavbar(false); // Close the navbar
    };

    const handleReportClick = (event) => {
        event.preventDefault();

        // const confirmNavigation = window.confirm(
        //     "Do you want to refresh the page and view the report?"
        // );
        // if (confirmNavigation) {
            window.location.reload();
            window.location.href = "/report";
        // }
    };

    const Hamburger = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="24"
            viewBox="0 0 52 24"
        >
            <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
                <rect
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    width="42"
                    height="4"
                    rx="2"
                    transform="translate(304 47)"
                    fill="#574c4c"
                />
                <rect
                    id="Rectangle_5"
                    data-name="Rectangle 5"
                    width="42"
                    height="4"
                    rx="2"
                    transform="translate(304 67)"
                    fill="#574c4c"
                />
                <rect
                    id="Rectangle_4"
                    data-name="Rectangle 4"
                    width="52"
                    height="4"
                    rx="2"
                    transform="translate(294 57)"
                    fill="#574c4c"
                />
            </g>
        </svg>
    );

    const isEmailYash = user?.email === "yash@gmail.com";

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink className="website-name" to="/" onClick={handleCloseNavbar}>
                        MERN
                    </NavLink>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements ${showNavbar && "active"}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleCloseNavbar}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={handleCloseNavbar}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={handleCloseNavbar}>
                                Contact
                            </NavLink>
                        </li>
                        {isEmailYash && (
                            <li>
                                <NavLink to="/admin" onClick={handleCloseNavbar}>
                                    Admin
                                </NavLink>
                            </li>
                        )}
                        {isLoggedIn ? (
                            <>
                                <li>
                                    <a
                                        href="/report"
                                        onClick={(e) => {
                                            handleReportClick(e);
                                            handleCloseNavbar();
                                        }}
                                    >
                                        Report
                                    </a>
                                </li>
                                <li>
                                    <NavLink to="/logout" onClick={handleCloseNavbar}>
                                        Logout
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login" onClick={handleCloseNavbar}>
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
